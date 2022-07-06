/* var foo = 'a'
foo = 'b'
foo = foo + 'c' */

var foo = "bc"
var foo2 = "bc"

var person = {}
person.name = 'pepito'
person.age = 25

var person2 = {
    name: 'pepito',
    age: 25
}

var array = ['dog', 'cat', 'elephant']
var array2 = ['dog', 'cat', 'elephant']

person2 = person
// le asigno a la variable 'person2' el valor de la variable 'person'. El valor de la variable 'person' apunta a la referencia del primer objeto creado

var randomVariable = 'hello world'
console.log(randomVariable)
console.log(typeof randomVariable)

randomVariable = 1
console.log(randomVariable)
console.log(typeof randomVariable)

randomVariable = randomVariable + ' pizza'
console.log(randomVariable)
console.log(typeof randomVariable)