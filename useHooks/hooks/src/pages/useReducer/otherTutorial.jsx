import React, { useReducer, useState } from "react";

/**
 * Many people do not know when to use it
 * Examples of when to utilize useReducer and it would be useful
 * How to implement
 * He is an alternative for useState
 * Allows you to create variables, that when their value change the page will re render with these new values
 */

/* state é o estado que foi passado para o segundo parametro do useReducer
action são as ações que o dispatch irá disparar */

const reducer = (state, action) => {
  switch (action.type) {
      case 'ResetValues':
        return {count: 0, showText: true}
      case 'IncrementAndShowText':
        return {count: state.count + 1, showText: !state.showText}
    default:
      return state;
  }
};

export default function OtherReducerTutorial() {
  //Dispatch is basically the function that will trigger a function
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
    name: "",
    cpf: "",
    address: "",
  });

  console.log(state)

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const handleClick = () => {
    dispatch({ type: "IncrementAndShowText" });
  };

  return (
    <>
      <h1>Contagem</h1>
      <br />
      {state.count}
      <br />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={() => dispatch({ type: 'ResetValues'})}>Reset</button>
      <br />
      <br />
      {state.showText && "Coé"}
    </>
  );
}
