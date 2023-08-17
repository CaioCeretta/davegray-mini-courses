/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'


function App() {

  //Index signatures are useful when you are creating an object but do not know the exact name of the object keys but you do know the shape of it, and you can declare the type of the keys and the types of the values

  // interface TransactionObj {
  //   Pizza: number,
  //   Books: number,
  //   Job: number
  // }

  //This is an index signature, we are saying we know all the keys will be string and all the values will be numbers, we could also use union values like [k: string]: number | string and the keys are usually stringss, it is common to be string, numbers and booleans, they can't be boolean
  interface TransactionObj {
    readonly [k: string]: number //The readonly causes it to now allow any assignments to any property created

    Pizza: number,
    Books: number,
    Job: number
  }

  const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Caio: 100

  }

  console.log(todaysTransactions.Pizza)
  console.log(todaysTransactions['Pizza'])

  // const prop: string = 'Pizza'

  //Type string cannot be used to index type
  //That is because we haven't created an index signature
  // console.log(todaysTransactions[prop])

  const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    // In the for in loop, when i pass this way, i'm passing the transaction, however, in typescript we get the same error when we try to dinamically access this value, so we fiz this by providing an index signature
    for (const transaction in transactions) {
      total += transactions[transaction]
    }

    return total;
  }

  console.log(todaysNet(todaysTransactions))

  console.log(todaysTransactions['Dave']);

  // todaysTransactions.Pizza = 40;

  console.log(todaysTransactions.Pizza)

  console.log(todaysTransactions['Dave'])

  /////////////////////////////////

  interface Student {
    // [k: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
  }

  const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
  }

  // console.log(student.test)

  // for(const key in student) {
  //   //In this case, if i don't add the index signature, it won't allow student[key] becayse
  //   console.log(`${key}: ${student[key]}`)
  // }

  //Without indexes signatures, it can be done with keyof assertions, like this

  for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
  }
  //keyof creates an union type and the union type is the specific string literals, it becomes an union type of name | gpa | classes

  Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
  })

  const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
  }

  logStudentKey(student, 'GPA')

  ////////////////////////////////////

  // interface Incomes {
  //   [k: 'salary']: number // this way wouldn't be possible to assign a key as a literal type, but we can on the other way (Record)
  // }

  /*Record<K, T> is an object type whose property keys K and whose property values are T, that is the equivalent of keyof Record<K, T> is equal K and <Record K, T>[K] is basically equivalent to T
  The purpose of K is to limit the property keys to particular values, if you want to accept all possible string-valued keys, you could do something like Record<string, T>, but the idiomatic way of doing that is to use an index signature like {[k: string]: T}
  
  Basically Record lets you create a new type from a Union, the values in the union are used as attributes of the new type, for example, we have a union type Names = 'Caio' | 'Briago' | 'Thuno' and now i want to create an object that contains information about all the names, i can create a new type using the values in the Names union as keys
  type NameList = Record<Names, {age: number}>
  if i want to satisfy the namelist i must create an object like
  const names: NameList = {
    Caio: { age: 27},
    Briago: { age: 32},
    Thuno, { age: 31}
  }

  this ensures us strong type safety
  if i forget a name i get an error,
  if i add a cat that's not allowed, i get an error
  if i later change Names, i get an error, because it likely imported from another file and likely used in many places
  }*/

  type Streams = 'salary' | 'bonus' | 'sidehustle'
  type Incomes = Record<Streams, number>
  //This way, it allows us to use string literals as the different types that are expected

  const monthlyIncomes: Incomes = {
    salary: 1000,
    bonus: 100,
    sidehustle: 250

  }

  // This returns an error, even though we have defined everything utilizing the record utility, requesting keyof assertions
  for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
  }

  return (
    <>
    </>
  )
}

export default App
