let n = 259;
function countDigit(n) {
  let count = 0;
  //handling the 0 case
  if(n===0) return 1
  //handling negative numbers
  n = Math.abs(n)
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
}

console.log(countDigit(n));
console.log(Math.floor(10.7))//10
console.log(Math.ceil(10.4));//11
console.log(Math.round(10.7))//10