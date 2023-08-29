import { ReactNode } from 'react';
import { CounterProvider, initState, useCounter, useCounterText } from './context/CounterContext';

type ChildrenType = {
  children: (num: number) => ReactNode
}






const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  const { count, increment, decrement} = useCounter();
  const {text, handleInputChange} = useCounterText();




  return (
    <>
      <h1>{children(count)}</h1>
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
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </div>

  )


}
