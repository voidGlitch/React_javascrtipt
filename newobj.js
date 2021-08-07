// //rest operator

// const person = {
//     name: 'miku',
//     age: 19,
//     hobby: 'coding',
// }
// const { age, name, ...newobj } = person
// // distructure the object into parts

// console.log(age, name, newobj)
// // same goes with the array
// const arr = ['this','is','an','array'];
// const [firstel,secondel,...newarr] = arr
// console.log(newarr)
// //same goes with the function
// function hey(first,...restof) {
//  console.log(restof)
 
// }
// hey(2,6,54,6,15,14,12);


//spread operator
const person = {
 name: 'miku',
 age: 19,
 hobby: 'coding',
};

// const extendedversion = {
//  ...person,
//  nickname : "mikee",
// };
// console.log(extendedversion)

const another ={
 nicename: "bisht",
}
const extendedversion = {
 ...person,
 hobby : "new hobby", //also overide the previous value
 ...another, //also merge two and more objects
};
console.log(extendedversion)

//for array
arr1 =['this','is','array']
arr2 =[1,2,3,4]
newarr =['hey',...arr1,...arr2,11]
console.log(newarr)