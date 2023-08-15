import { useReducer } from 'react';
import './App.css';

type StateType = {
  count: number,
  color: boolean,
  userInput: string;
}

const initialState: StateType = { count: 0, userInput: '', color: false };


const reducer = (state: StateType, action: any) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'toggleColor':
      return { ...state, color: !state.color}
    case 'newUserInput':
      return { ...state, userInput: action.payload }
    default:
      throw new Error();
  }
}

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TOGGLE_COLOR: 'toggleColor'
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#fff952' }}>
      <input type="text" value={state.userInput} onChange={(e) => dispatch({type: ACTION.NEW_USER_INPUT, payload: e.target.value})} />
      
      <br /><br />
      <h4>{state.count}</h4>
      <section>
        <button onClick={(() => dispatch({type: ACTION.DECREMENT}))}>-</button>
        <button onClick={(() => dispatch({type: ACTION.INCREMENT}))}>+</button>
        <button onClick={() => dispatch({type: ACTION.TOGGLE_COLOR})}>Color</button>
      </section>

      <p>{state.userInput}</p>
    </main>


    
  );
}

export default App;
