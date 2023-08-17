/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'


export default function App() {

  /* Why do we need generics? The idea of typescript is to deifine strict types for type safety developer experience, s
  to that, typescript does allow generics, because sometimes we simply don't know what types we pass into a function,
  interface, type alias, and generic allows us to pass a placeholder, "a type variable" 
*/

//But what if we wanted to write the same function with dynamic types
const stringEcho = (arg: string): string => arg

const echo = <T, >(arg: T): T => arg

const isObj = <T, >(arg:T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
} 

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'JOrge'}))
console.log(isObj(true))

function isTrue<T, >(arg: T): { arg: T, is: boolean } {
  if(Array.isArray(arg) && !arg.length) {
    return {arg, is: false}
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false}
  }

  return { arg, is: !!arg}
  

}

// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Caio'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({}))
// console.log(isTrue({ name: 'Caio' }))
// console.log(isTrue([]))
// console.log(isTrue([1, 2, 3]))
// console.log(isTrue(NaN))
// console.log(isTrue(0))

interface BoolCheck<T> {
  value: T,
  is: boolean
}

function checkBoolValue<T, >(arg: T): BoolCheck<T> {
  if(Array.isArray(arg) && !arg.length) {
    return {value: arg, is: false}
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false}
  }

  return { value: arg, is: !!arg}
  

}

// console.log(checkBoolValue(false))
// console.log(checkBoolValue(0))
// console.log(checkBoolValue(true))
// console.log(checkBoolValue(1))
// console.log(checkBoolValue('Caio'))
// console.log(checkBoolValue(''))
// console.log(checkBoolValue(null))
// console.log(checkBoolValue(undefined))
// console.log(checkBoolValue({}))
// console.log(checkBoolValue({ name: 'Caio' }))
// console.log(checkBoolValue([]))
// console.log(checkBoolValue([1, 2, 3]))
// console.log(checkBoolValue(NaN))
// console.log(checkBoolValue(0))

interface HasID {
  id: number
}

//This is extends is narrowing the generic type, and the type will have to have an id property
function processUser<T extends HasID>(user: T): T {
  // process the user with logic here
  return user
}

console.log(processUser({id: 1, name: 'Caio'}))
//Error
// console.log(processUser({name: 'Caio'}))

//We are extending K as the keyof the first type we pass in, the key of T
const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] =>  {
  return users.map(user => user[key])
}

const usersArray = [
  {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
          }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
      }
  },
  {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
          }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
      }
  },
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))
///////////////////////////////////////////////

class StateObject<T> {
  private data: T
  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}

// const store = new StateObject('Claude')
// const store = new StateObject(12)
//After we assigned Claude, that is the type T will take

const store = new StateObject(12)
//Now it doesn't throw an error

store.state = 12

console.log(store.state)

//This way of using generics we are going to say to the object the types it can receive
const myState = new StateObject<(string | number | boolean)[]>([15])

myState.state = ['Caio', 42, true]

console.log(myState.state)


return (
  <>
  </>
)


}
