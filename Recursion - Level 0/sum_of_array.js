let arr = [5, 3, 2, 0, 1];

function sum(arr) {
  if (arr.length === 0) return 0;
  return arr.shift() + sum(arr);
}

console.log(sum(arr));

