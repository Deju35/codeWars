// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

function isIsogram(str){
  const length = str.length;
  for(let i= 0;  i< length; i++){
    for(let j = i+1;  j< length;  j++){
      if(str[i].toLowerCase() === str[j].toLowerCase()){
        return false;
      }
    }
  }
  return true;
}
