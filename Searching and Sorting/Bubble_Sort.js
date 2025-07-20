let arr = [5, 2, 4, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(bubbleSort(arr));
