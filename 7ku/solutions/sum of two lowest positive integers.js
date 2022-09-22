function sumTwoSmallestNumbers(numbers) { 
  sorted = numbers.sort((a,b) => a-b); // sort the numbers in ascending order
  return sorted[0] + sorted[1]//  return the first two numbers since the two lowest
}
