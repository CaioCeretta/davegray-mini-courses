/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'


export default function App() {

  //Utility Types

  //Partial

  interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
  }

  /*
    The utility partials is mainly used to make all properties of an existing type as optionals by creating a new type
  with the same properties but with optional modifiers '?' added to each property
    This can be handy when you have an interface or type and you want to create a new object with some but not all of its
  properties.
    One other example is as follows:

  interface Address {
    street: string;
    city: string;
  }

  interface Person {
    name: string;
    age: number;
    address: Address
  }

  const partialPerson: Partial<Person> = {
    name: 'Bob',
    address: {
      city: 'New York,
      street: 'any street'
    }
  }

  In the case above, it shows that only the top level is affeced by the partial, in this case, Person, Address is not affected
  
  In this function, where i pass propsToUpdate as a partial of the assignment interface it means it doesn't need to be
  the whole interface, i can update just one property, like in the example below, i updated the grade*/
  const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
  }

  const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0
  }

  console.log(updateAssignment(assign1, {grade: 95}))

  const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

  /*Required and Readonly

  The required utility makes all the interface or type properties required, optionals properties now become required

  */

  const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database, etc
    return assign
  }

  recordAssignment({...assignGraded, verified: true} ) 

  /* 
    in Readonly<T> all the properties in T are made readonly or immutable, in other words, we can use it to ensure that
    the properties of an object cannot be modified after it's been created, it's often used when you want to prevent
    accidental modifications to objects or ensure immutability on the code
  */

  const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
  }

  // assignVerified.grade = 95  Cannot redeclare a readonly property
  

  /* The most popular one, Record type
    The Record<K, T> utility type in TypeScript is used to create an object type with keys of type K and values of type T.
    It's a generic type that allows you to define a specific shape for objects where the keys are known at compile time.

    type Person = {
    name: string;
    age: number;
  };

  type PeopleRecord = Record<string, Person>;

  const people: PeopleRecord = {
    person1: { name: "Alice", age: 30 },
    person2: { name: "Bob", age: 25 },
  };

  In this example, PeopleRecord defines an object type where keys are strings, and values are objects conforming to the Person type.

The Record utility type is especially handy in scenarios where you want to ensure consistency in the shape of objects
across your codebase or when you're working with data that has a well-defined structure.
  */

  const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
  }

  type Students = 'Bruno' | 'Thiago'
  type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'F'

  /* In this case the keys are values on Students and the Values are the values on LetterGrades */

  const finalGrades: Record<Students, LetterGrades> = {
    'Bruno': 'A',
    'Thiago': 'F'
  }

  interface Grades {
    assign1: number;
    assign2: number;
  }

  const gradeData: Record<Students, Grades> = {
    Bruno: { assign1: 100, assign2: 100 },
    Thiago: {assign1: 0, assign2: 0}
  }

  //Pick and Omit, these utility types they go hand in hand

  type pickedAssignmentType = Pick<Assignment, 'studentId' | 'grade'> //In this case we picked what we want to use from the interface

  const pickedAssignment: pickedAssignmentType = {grade: 80, studentId: 'c123'}

  type omittedAssignmentType = Omit<Assignment, 'grade' | 'verified'>; // This will do the exact opposite from the pick util

  const omittedAssignment: omittedAssignmentType = {studentId: 'c123', title: 'caio'}

  // Exclude and extract, these can be confused with the pick and omit, they work with string literal union types like:

  type adjustedGrade = Exclude<LetterGrades, 'F'>

  type highGrades = Extract<LetterGrades, 'A' | 'B'>

  // Nonnullable
  
  type AllPossibleGrades = 'Caio' | 'Thiago' | 'Bruno' | null | undefined

  type NamesOnly = NonNullable<AllPossibleGrades>

  // ReturnType


  const createNewAssign = (title: string, points: number) => {
    return { title, points }
  }

  //The return type creates a type based on the properties returned by another function
  type NewAssign = ReturnType<typeof createNewAssign> 

  const tsAssign: NewAssign  = createNewAssign('Utility Types', 100)

  console.log(tsAssign)

  // Parameters, this utility creates a tuple with the parameters of the given function

  type AssignParams = Parameters<typeof createNewAssign>

  const assignArgs: AssignParams = ['Generics', 100]

  const tsAssign2: NewAssign = createNewAssign(...assignArgs)

  console.log(tsAssign2)

  // Awaited Utility - Helps us with the ReturnType of a Promise

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }  

  const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users'
                          ).then(res => {
                            return res.json()
                          }).catch(err => {
                            if(err instanceof Error) console.log(err.message)
                          })
    return data           
  }

  type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

  fetchUsers().then(users => console.log(users))




return (
  <>
  </>
)


}
