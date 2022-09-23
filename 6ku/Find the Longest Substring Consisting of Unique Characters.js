// DESCRIPTION:
// Task
// You are given a string s. It's a string consist of letters, numbers or symbols.

// Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.

// Note
// 1 <= s.length <= 10^7

// 5 fixed testcases

// 100 random testcases, testing for correctness of solution

// 100 random testcases, testing for performance of code

// All inputs are valid.

// Pay attention to code performance.

// If my reference solution gives the wrong result in the random tests, please let me know(post an issue).

// Example
// For s="baacab", the output should be 3.

// The non repeating substrings in s are:

// "b","c","a","ba","ac","ca","ab","cab"
// The longest one is "cab", its length is 3.

function longestSubstringOf(string) {
  let start = 0; // sliding window approach
  let end = 0; 
  let maxLength = 0
  const unique = new Set();
  while(end< string.length){
    if(!unique.has(string[end])){
      unique.add(string[end])
      maxLength = Math.max(maxLength, unique.size)
      end++
    }else{
      unique.delete(string[start])
      start++
    }
  }
  return maxLength
}
