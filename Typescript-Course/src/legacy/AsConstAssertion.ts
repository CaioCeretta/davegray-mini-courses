/* In javascript, const doesn't necessarily indicates a constant, primite values cannot be reassigned, but when it comes
to objects types, including arrays, the contents can still be mutaded, we can add new property to an object defined with
const, we can also push new elements into an array defined with const, but in typescript, we can use an assertion 
" as const " to make the object or array a true constant, now i can no longer add a new property to the object, or push
a new element into the array.*/

// const username = 'Caio' //primitive

// const userObj = {
//   username: 'Caio'
// } as const



// const userArray = ['Caio', 42] as const

/*This nakes the object or array a true constant, now i can no longer add a new property to the obj or push a value to
the array, and after this assertion, it sets its values as readonly */

