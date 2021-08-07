// // always remeber to have promise in PascalCase
// const mypromise = new Promise((resolve, reject) => {
//     // resolve('hello')  //resolved state
//     // reject(10)  //rejected state
//     setTimeout(()=>{
//      resolve("hello")
//     },1000)  // it is pending state
// })
// console.log(mypromise)

// mypromise
//     .then((val) => {
//         console.log('your value:', val)
//         return 10
//     })
//     .then((val1) => {
//         console.log('on continue', val1)
//     }).catch((err) =>{
//      console.log("catching error",err)
//     })

const mypromise = (num) => {
    return new Promise((resolved, reject) => {
        if (num > 5) {
            resolved('num is grater than 5')
        } else {
            reject('num is less than 5')
        }
    })
}
// mypromise(2)
// .then((val) => {
//  console.log("resolved:",val)
// })
// .catch((err) =>{
//  console.log("error:",err )
// })

//new method 

async function myfunction() {
    // const val = await mypromise(6)
    // console.log(val)  but if we got an error a huge message will show so to counter that try catch block is in use
 try{
  const val = await mypromise(3)
  console.log(val)
 }
 catch(err){
  console.log("ERROR: ",err);
 }

}
 myfunction()