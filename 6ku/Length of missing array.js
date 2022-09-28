
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
function getLengthOfMissingArray(arrayOfArrays) {
  let res = (arrayOfArrays || []).map(el=> el? el.length: 0).sort((a,b)=>a-b)
  if(res.includes(0)){
    return 0
  }
  for(let i = 0; i<res.length; i++){
    if(res[i+1]!== res[i] + 1){
      return res[i] + 1
    }
  }
  return 0
}
