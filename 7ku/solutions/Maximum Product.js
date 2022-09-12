


// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  prod = -Infinity;
  for(let i= 0; i< array.length; i++){
    res = array[i] * array[i+1]
    if(prod< res){
      prod = res
  }
  }
    return prod
  }
