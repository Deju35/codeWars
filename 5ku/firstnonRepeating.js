// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

function firstNonRepeatingLetter(s) {
 let str = s.split("")

 let hash = {}
 for(let i of str){
   hash[i] = hash[i]+1 ||  1;
   }
   for(let i in hash){
     if(hash[i]<2){
       return i
       }
     }
     return ""
