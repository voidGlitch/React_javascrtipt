// object Destructuring
const person = {
    name: 'miku',
    age: 19,
    hobby: 'coding',
}

// const name =person.name
// const age =person.age
// const hobby =person.hobby
// console.log(name,age,hobby)

// another way to describe it is

// const {name,age,hobby} = person;
// console.log(name,age,hobby)

// const{name,age,hello} =person;
// console.log(name,age,hello)  //print undefined as we have not defined it in our object

const hobby = 5
const { name, age, hobby: hobby2 } = person
console.log(hobby, hobby2)

//array Destructuring

const arr = [1, 2, 3, 4]
const [, , , forth] = arr
console.log(forth)

// array and object Destructuring using function

function somename({ name } = {}, [firstel] = []) {
    console.log(name, firstel)
}
// somename(person, arr)
//if we try to forget top put any one object or array then it is undefined because of empty array or object
somename()
somename(person, arr)
somename(person)
