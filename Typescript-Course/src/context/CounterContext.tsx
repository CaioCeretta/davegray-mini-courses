import { ChangeEvent, ReactElement, createContext, useCallback, useContext, useReducer } from "react";

interface StateType {
  count: number;
  text: string;
}

export const initState: StateType = { count: 0, text: '' }

type ActionTypes =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'NEW_INPUT', payload: string }


const reducer = (state: typeof initState, action: ActionTypes): StateType => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'NEW_INPUT':
      return { ...state, text: action.payload }
    default:
      return state;
  }
}

const useCounterContext = (initState: StateType) => {

  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), []);
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), []);

  console.log(state);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;

    dispatch({ type: 'NEW_INPUT', payload: newText })
  }, [])

  return { state, increment, decrement, handleInputChange }

}

type UseCounterContextType = ReturnType<typeof useCounterContext>

const initialContextState: UseCounterContextType = ({
  state: initState,
  increment: () => { },
  decrement: () => { },
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => { }
})

export const CounterContext = createContext<UseCounterContextType>(initialContextState)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CounterProvider = ({ children, ...initState }: StateType & ChildrenType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>{children}</CounterContext.Provider>
  )
}

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (): UseCounterHookType => {
  const { state: { count }, increment, decrement } = useContext(CounterContext)

  return { count, increment, decrement }
}

type UseCounterTextHookType = {
  text: string,
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCounterText = (): UseCounterTextHookType => {
  const { state: { text }, handleInputChange } = useContext(CounterContext)
  return { text, handleInputChange }
}