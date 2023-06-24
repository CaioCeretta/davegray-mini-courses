import React, { useRef, useState } from "react";

export default function Ref() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);

  /* useRef value stays the same between renders and updating it will not trigger a re-render like the useState*/
  const renders = useRef(0);
  const inputRef = useRef();

  const timerId = useRef();


  const handleChange = (e) => {
    setRandomInput(e.target.value);
    // renders.current is where the ref value is stored
    renders.current++;
  };

  const startTimer = () => {

    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
      //Everytime re-render the seconds state it will be rendered again
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  // const focusOnInput = () => {
  //   inputRef.current.focus();
  // }

  /* One thing we shouldn't do is thatwe shouldn't grab the value of an input with the ref, instead we should work with
  the state in react, if we start doing it, and get out of sync with the state it can have bad repercussion throughout the
  app.
  We must use 'useRef' to create a reference in something in a certain component when we really need to access it that way */

  return (
    <>
      {/* <main className="container">
        <input
          ref={inputRef}
          type="text"
          value={randomInput}
          placeholder="Random Input"
          onChange={handleChange}
        />
        <p>Renders: {renders.current}</p>
        <br /><br />
        <button onClick={focusOnInput}>Focus</button>
        <br /><br />
        <p>{randomInput}</p>
        {seconds}
      </main> */}

      <main className="container">
        
        <p>Renders: {renders.current}</p>
        <br />
        <br />
        <section>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </section>
        <br />
        <br />
        {/* <p>{randomInput}</p> */}
          <p> Seconds: {seconds} </p>
      </main>
    </>
  );
}
