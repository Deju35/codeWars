let myArr = [];

function sum(num) {
  
  return partition(num, num);
}

function partition(num, previous) {

  
  //set the base cases by Partition number theroy
  if(num === 0) return 1;
  if(previous === 0) return 0;
  if(num < 0) return 0;
  if(myArr[num] === undefined) myArr[num] = [];

  let result = myArr[num][previous]
  if(typeof result != "number") {
    result = partition(num - previous, previous) + partition(num, previous - 1)
    myArr[num][previous] = result
  }
  return result
}
