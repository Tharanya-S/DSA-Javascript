let arr = [7, 4, 3, 5, 1, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (curr < arr[prev] && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev = prev - 1;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

console.log(insertionSort(arr));
