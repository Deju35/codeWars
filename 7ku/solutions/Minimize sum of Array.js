
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .


function minSum(arr) {
  let sum = 0
  var a = arr.sort((a,b) => a-b)
  for(let i = 0; i< arr.length/2; i++){
    sum+= a[i] * a[a.length-1-i]
  }
  return sum
}
