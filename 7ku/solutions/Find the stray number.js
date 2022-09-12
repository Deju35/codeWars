// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
  var arr = numbers.sort();
  if(arr[0] !== arr[1]){
    return arr[0]
  }else{
    return arr[arr.length-1]
  }
}
