//sorting an array:

// let given_array=[2,3,1,4,0]
// for (let i=0;i<given_array.length;i++){
//     for (let j=0;j<given_array.length;j++){
//         if (given_array[j]>given_array[j+1]){
//            let  x=given_array[j]
//            given_array[j]=given_array[j+1]
//            given_array[j+1]=x

            
//         }
//     }
// }
// console.log(given_array);

// let array1=[2,5,3,4,0]
// const double=(num)=>{
//     return num*2
// }

// carray1.map(double)

// function factorial(num){
//     if (num===0){
//       return 1
//     }
//     return num*factorial(num-1)
    
//   }
//   console.log(factorial(4))

  let factorial=(num)=>{
    if (num===0){
      return 1
    }
    return num*factorial(num-1)
    
  }
  console.log(factorial(4))