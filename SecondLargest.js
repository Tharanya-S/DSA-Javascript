function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  if (arr.length < 2) return null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [7, 7, 8, 1, 5, 6];
let result = secondLargest(arr);
console.log(result);
