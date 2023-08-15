import './App.css'


function App() {


  // Type Aliases

  // type stringOrNumber = string | number;

  // type stringOrNumberArray = (string |  number)[]

  // type Guitarist = {
  //   name: string;
  //   active: boolean;
  //   albums: stringOrNumberArray
  // }

  // type UserId = stringOrNumber

  // // Literal types
  // let myName: 'Caio'

  // let userName: 'Dave' | 'John' | 'Amy'

  // userName = 'Dave'

  // functions

  // const add = (a: number, b: number): number => {
  //   return a + b;
  // }

  // const logMsg = (msg: any): void => {
  //   console.log(msg);
  // }

  // logMsg('Hello')
  // logMsg(add(1, 3));
  // // logMsg(add('a', 3))
  
  // const subtract = function(c: number, d:number): number {
  //   return c - d
  // }

  // type MathFunction = (a: number, b: number) => number;
  // // interface MathFunction {
  // //   (a: number, b: number): number
  // // }

  // const Multiply: MathFunction = function (c, d)  {
  //   return c * d;
  // }

  // console.log(Multiply(10, 10));

  // logMsg(Multiply(2, 2));

  /* Optional Parameters */

  const addAll = function (a: number, b: number, c?: number): number {
    if(typeof c !== 'undefined') {
      return a + b + c
    }

    return a + b;
  }

  // default param value
  const sumAll = function (a: number = 10, b: number, c: number = 2): number {
      return a + b + c
  }

  const logMsg = (msg: any): void => {
    console.log(msg);
  }

  logMsg(addAll(2, 3, 5))
  logMsg(addAll(2, 3))
  logMsg(sumAll(2, 3))

  /*If we want to pass default values to a parameter, it is a best practice to set it on the last argument, but
  if we set any other one, we must pass "undefined" on its position so the program won't get confused*/

  logMsg(sumAll(undefined, 2))

  // Rest parameters should always come at the end
  const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((acc, curr) => acc + curr)
  }

  logMsg(total(1, 2))
  
  const createError = (errMsg: string) => {
    throw new Error(errMsg)
  }

  /* Typescript usually infers never on the return type of a function that throws an error, but if, we are not
  throwing an error, and typescript is infering never, we must double check the function, because it may be re
  turning an infinite loop */

  // const infinite = () => {
  //   let i: number = 1
  //   while(true) {
  //     i++

  //     if(i > 100) {
  //       break;
  //     }
  //   }
  // }


  //custom type guard
  const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
      ? true
      : false
  }

  // use of the never type
  const numberOrString = (value: number | string): string => {
    if(isNumber(value)) return 'String'

    if(isNumber(value)) return 'Number'

    // return createError('This should never happen!')
  }


  


  return (
    <>
    </>
  )
}

export default App
