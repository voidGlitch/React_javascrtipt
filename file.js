const whatever = require('./new.js');
const my ="hello";
console.log(my);
console.log(whatever)

const arr =[1,2,3,4,5];
const newarry = arr.map(function(val,index,arr){
 return val + 5

})
console.log(arr)
console.log(newarry)

const newarr = arr.reduce(function(acc,val){  //acc is accumulator which stores the value and val is the current value we are seeing
return acc+ val
},0); //initial value
//prints the sum of all the number in the array
console.log(newarr)
//see how it works
// 1) acc(0)+val(1) =1
// 2) acc(1)+val(2) =3
// 3) acc(3)+val(3) =6
