// DESCRIPTION:
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

function stringTransformer(str) {
  const allUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
     .split('')
     .map(s=> allUpper.indexOf(s)=== -1? s.toUpperCase(): s.toLowerCase())
     .join('')
     .split(' ')
     .reverse()
     .join(' ')
  
  
  // Your code here
}
