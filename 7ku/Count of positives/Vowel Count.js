// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).


function getCount(str) {
  let vowelCount = 0
  const vowels= 'aeiou'
  str = str.toLowerCase()
  for(let char of str){
    if(vowels.includes(char)){
      vowelCount++
    }
  }
  return vowelCount
}
