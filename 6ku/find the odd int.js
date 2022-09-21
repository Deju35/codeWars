function findOdd(A) {
  let hash = {};
  A.forEach(function(elem){
    hash[elem]? hash[elem]++ : hash[elem] = 1;
  });
  
  for(i in hash) {
    if(hash[i] % 2 !== 0) return Number(i);
  }
}
