// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.
// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.
function arrayLeaders(numbers){

  let sum = 0;
  let result = [];
  for(let i =  numbers.length-1; i>=0; i--){
    if(numbers[i] > sum)
    result.unshift(numbers[i]);
    sum += numbers[i];
    }
    return result
  
  }


