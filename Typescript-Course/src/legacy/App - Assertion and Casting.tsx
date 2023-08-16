/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'


function App() {

  type One = string
  type Two = string | number
  type Three = 'hello'

  // convert to more or less specific
  const a: One = 'hello'
  /*Assigned the type that is less specific, because Two is string or number and we've put b equal to a and a has the
  type of Two, even though it says a is  a string, we changed the typpe to be string or number, a less specific type  */
  const b = a as Two

  // const c = a as Three; // More specific because a is equal to hello, which is a literal on type three

  // const d = <One>'world'
  // const e = <string | number>'world'

  const addOrConcat = (val1: number, val2: number, c: 'add' | 'concat' ): number | string => {
    if(c === 'add') {
      return val1 + val2
    } else {
      return '' + val1 + val2;
    }
  }

  
  //This way typescript accepts, even though the function is number or string, we show that we know better
  const myString: string = addOrConcat(10, 20, 'concat') as string;

  // Be careful, because ts sees no problem here, but a string is returned
  const myNumber: number = addOrConcat(10, 20, 'concat') as number;

  //Typescript check when it can
  // 10 as string

  //When you want to cast something specific you are going to overrule something
  (10 as unknown) as string;

  //The DOM

  // const img = document.querySelector('img')
  /*Typescript doesn't know what we are talking about when we say document, but it infers that we are
  talking about a HTMLImageElement, but i can also be null*/

  // const img = document.querySelector('#myId')
  /*In this case is just an Element, just by selecting by id, because it's any element on an id*/

  // const myImg = document.getElementById('#img')
  //In this case it doesn't know it is an image, but because we are using getElement, it infers as it is one
  
  // const img = document.querySelector('img') as HTMLImageElement
  // const myImg = document.getElementById('#img')
  
  // //Doesn't complain
  // img.src

  // //Complains
  // myImg.src

  // const myImg = document.getElementById('#img')! as HTMLImageElement // ! after a variable is a non null assertion 

  const nextImg = document.getElementById('#img');

  

  return (
    <>
    </>
  )
}

export default App
