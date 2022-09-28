// DESCRIPTION:
// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.



function foldArray(array, runs){
  let result = []
  let array2 = array.slice()
  while(array.length>1){
    result.push(array2[0] + array2[array2.length-1])
    2array = array2.slice(1,array2.length-1)
  }
  if(array2.length==1){
    result.push(array2[0])
  }
  if(runs>1){
    return foldArray(result,runs-1)
  }
  return result
  
  
}
