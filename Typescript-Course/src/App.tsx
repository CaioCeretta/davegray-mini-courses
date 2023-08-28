/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

//React Hooks in Typescript

interface User {
  id: number,
  username: string
}

export default function App() {

  /* In this way the typescript won't complain because it infers that it is a number, but we can be explicit and say
  that this state has a certain type, in a generic */
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[] | null>(null)
  

  useEffect(() => {
    //Just to reinforce, when we are using strict mode, it mounts the component, unmount and mount again
    console.log('Mounting')
    console.log('Users: ', users)

    return () => {
      console.log('Unmounting')
    }



  }, [users])

  //The dependecy array makes it to not render two times

  ///////////////////////////

  /* UseCall back will memoize a function so it is not always recreated on each render, only when the dependency array value change */

   
  // const addTwo = useCallback((e: MouseEvent) => {
  //   setCount(prev => prev + 2)
  // }, [])


  ////////////////// useMemo

  /*It memoizes a value, we would use that for an expensive calculation, something that may take a while to calculate
  and might hold everything in our component until it have that value
  
  A typical example is the fibonacci sequence:
  
  */

  const [fibN, setFibN] = useState(0)

  type fibFunc = (n: number) => number;


  const fib: fibFunc = (n) => {
    if(n < 2) return n

    return fib(n-1) + fib(n - 2)
  }

  const memoizedFib = useMemo(() => fib, [])

  function fibValue(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = parseInt(e.target.value, 10);

    if(!isNaN(inputValue)) {
      const result = memoizedFib(inputValue);
      setFibN(result)
    }
  }


  // useRef

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef.current)
  console.log(inputRef.current?.value)

  /* Changing the value stored in current, like in the input value, it will not cause the component to re-render, and it will not cause the ref to change, but when the component re renders, it will be re-rendered*/





  return (
    <>
    <div className="App">
      <input type="text" ref={inputRef} name="" id="" />
      {/* <label htmlFor="fib">{fibN}</label> */}
      {/* <input id="fib" onChange={fibValue} type="text"></input> */}
      
      
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      {/* <button onClick={() => setCount(prev => prev + 1)}>Add</button> */}
      {/* That is fine, but this function is recreated every time and while it is not a big function and it is not a big
      deal, but what we can do is name this function and wrap it in a useCallback to memoize it */}
    </div>
    </>
  )


}
