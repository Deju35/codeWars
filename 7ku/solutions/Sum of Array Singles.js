// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

function repeats(arr){
  let sum = 0
  const hash = {}
  for(let i of arr){
    if(!hash[i]){
      hash[i] = 1
    }else{
      hash[i]++
    }
  }
  for(let i in hash)
  if(hash[i]<2){
    sum+=Number(i)
  }
  return sum
//..
};

