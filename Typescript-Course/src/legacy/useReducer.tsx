import { ChangeEvent, ReactNode, useReducer } from 'react';

type ChildrenType = {
  children: (num: number) => ReactNode
}

interface StateType {
  count: number;
  text: string;
}

const initState: StateType = { count: 0, text: '' }

type ActionTypes =
  | { type: 'INCREMENT'}
  | { type: 'DECREMENT'}
  | { type: 'NEW_INPUT', payload: string }


const reducer = (state: typeof initState, action: ActionTypes): StateType => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1}
    case 'DECREMENT':
      return {...state, count: state.count - 1}
    case 'NEW_INPUT':
      return {...state, text: action.payload}
    default:
      return state;
  }
}




const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({type: 'INCREMENT'})
  const decrement = () => dispatch({type: 'DECREMENT'})

  console.log(state);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;

    dispatch({type: 'NEW_INPUT', payload: newText})
  }




  return (
    <>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type='text' onChange={handleInputChange} />
      </div>
    </>
  )
}

export default function App() {



  return (
    <div className="App">
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </div>

  )


}
