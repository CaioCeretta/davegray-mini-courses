import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': 
      return { count: state.count + 1}
    case 'decrement':
      return { count: state.count - 1}
    default:
      throw new Error();      
  }
}

export default function Reducer() {
  /* useReducer params:
  1 param is the state
  2 param is the dispatch, we will send an anction with dispatch
  
  it will use, as the name implies, use a reducer which 

  */
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <main className="container" style={{color: color ? '#fff' : '#fffaaa'}}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <br /><br />
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setColor(prev => true)}>Color</button>
    
    </main>
  );
}
