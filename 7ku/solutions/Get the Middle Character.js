// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s){
  let len = s.length
  let middle = Math.floor(len/2)
  
  if(len%2 === 0){  /// if list is even
    return s[middle-1] + s[middle]
  }else{// if odd
    return s[middle]
  }
  
  
  
}
