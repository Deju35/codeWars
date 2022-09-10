// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
function maxGap (numbers){
  let arr = numbers.sort((a,b)=> a-b)
  let res = 0
  for(let i = 0; i< arr.length; i++){
    let diff = arr[i+1] - arr[i]
      if(diff>res){
        res = diff
      }
    }
    return res
