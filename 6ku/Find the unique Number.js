// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try finding it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
let newArr = arr.sort((a,b)=> a-b)
return (newArr[0]!==arr[1])? arr[0]: arr.pop()
}
