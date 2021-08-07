//fuction decleration
functiondecleration();
function functiondecleration() {
   const v =5;
   console.log(v);
}

const funExpression = function(){
 const a =6;
 console.log (a);
};
funExpression();

function fun(firstarg,secondarg="heyy"){
 console.log(firstarg,secondarg)
}
fun(4,5);
fun(4);

//arrowfunction only used as function expression
const arrowarr = () => {
const att = 8;
console.log(att)
}
// orr 
const arrowarr2 = () => 8;
console.log(arrowarr2());
const name ="sam "
console.log(`hey there its me ${name}. my age is ${arrowarr2()}`)