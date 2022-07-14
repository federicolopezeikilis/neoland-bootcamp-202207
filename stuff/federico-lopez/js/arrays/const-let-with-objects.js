// change properties of an object
const obj = { name: 'pedro', age: 37 }

obj.name = 'carlos'
obj.age = 50

// fails when try to reassign a const variable
const obj = { name: 'pedro', age: 37 }

obj = { 'carlos', age: 50 }

// succeed reassigning a let variable

let obj = { name: 'pedro', age: 37 }

obj = { 'carlos', age: 50 }
