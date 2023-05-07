import React, { useCallback, useEffect, useMemo, useState } from "react";

/* Essentialy what useMemo does is memoizing the output of a function, not the function itself, useCallback gives us a
function with referential equality, useMemo gives us the result of a function that it calls*/

/*What we are doing is bringing an expensive function, expensive functions could also be refered to as costly or simply
as a slow function, an example of an expensive function is one that uses recursion like the calculation of the fibonacci
sequence, it calls itself inside the function */

const getArray = () => {
  for (let i = 0; i < 100000000; i++) {
    //do something expensive
  }

  return ["Caio", "Ceretta"];
};

export default function Memo() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  /*In this case everytime we update a state in react, it will re-render the component, so the fibonacci calculus will
  be executed again, even if the input isn't changed */

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);
  /* The difference here, although it won't change anything with useEffect, we didn't have a referential equality problem
  because it was a primitive value that was not changing, but we had a problem with performance, and with useMemo, we
  can notice that it isn't occurring anymore, because useMemo is providing the fibnumber and it is not needing to recalculate
  everytime because it is a memoized result*/

  /*useEffect knows when a primitive value is not changing and it can avoid calling the function when the value hasn't
  changed, but useMemo really guards ourselves from values that aren't primitive like objects or arrays*/
  useEffect(() => {
    console.log("New number");
  }, [fibNumber]);



  /* Separate Example */

    const myArray = useMemo(() => getArray(), []);

    useEffect(() => {
      console.log('New array')
    }, [myArray])

    /*In this case, useEffect will not recognize the value remains the same because myArray is not a promitive
    value, so it is important that we use the useMemo hook */ 

  /* End of the separate example */

  return (
    <main className="container">
      <label htmlFor="fibonacci">Fibonacci Sequence:</label>
      <input
        type="number"
        name="fibonacci"
        value={userNumber}
        placeholder="Position"
        onChange={(e) => setUserNumber(e.target.value)}
      />

      <p>Number: {fibNumber || "---"}</p>
      <br />
      <br />

      <label htmlFor="random">Random Input</label>
      <input
        type="text"
        name="random"
        value={randomInput}
        placeholder="Position"
        onChange={(e) => setRandomInput(e.target.value)}
      />
    </main>
  );
}
