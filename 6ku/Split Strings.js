// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
  let result = []
  let str1 = str.split('')
   for(let i=0; i<str1.length; i+=2){
     if(str1[i+1]) result.push(str1[i]+str1[i+1])
     else result.push(str1[i] +  '_')
}
  return result
  }
