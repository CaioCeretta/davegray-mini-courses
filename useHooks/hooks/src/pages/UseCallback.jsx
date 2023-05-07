import React, { useCallback, useEffect, useState } from "react";

/*The main purpose of useCallback is for referential equality, even though the values are the same, the reference they
have in memory are different, so everytime, the function sums executes it will re-render the component and create a new
reference on the memory, in that case, sum should not be recreated just because we typed a new value on the input, and
it do not need to calculate a new value for us because the variables are still the same*/

export default function Callback() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(5);

  const sum = useCallback(() => num1 + num2, [num1, num2]);

  /*What useCallback does, is now we are going to have 'memoaize' the function, so now we are going to have the referential
  equality and now the console will print the value of the sum only once, because the sum is not changing when we update
  the state, it should only be called when the useCallback dependencies change */

  // useEffect(() => {
  //   console.log(`New sum. Value ${sum()}`);
  //   setResult(sum());
  // }, [sum]);

  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]);

  return (
    <main className="container">
      <input
        type="text"
        placeholder="input"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Numbers</h1>
      <input
        type="number"
        placeholder="num1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="num2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Output: {userInput || "---"}</h1>
    </main>
  );
}
