import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function Layout() {
  
  const [number, setNumber] = useState(0)
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  //In use effect the code inside is really a side effect, it changes after something else has changed

  /* The difference between useEffect and useLayout is that useEffect is asynchronous, it will not delay "painting"
  the DOM to the browser, and useLayout is synchronous and it will delay "painting" the DOM to the browser, so it will
  run its code before sending, so useEffect is the most correct form in 99% of the time.
  
  The example below will cause the code to change its number before changing the padding, so if you do not want it to
  happen you can use the useLayout, which is synchronous
  */

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    for(let i = 0; i <= 100000000; i++) {
      if(i === 100000000) setSectionStyle({paddingTop: `${random}px`})
    }
  }, [number])
  
  return (
    <main className="App">
      <section ref={sectionRef} style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber(prev => prev - 1)}>-</button>
          <button onClick={() => setNumber(prev => prev + 1)}>+</button>
        </div>
      </section>
    </main>
  );
}
