//Write a function that searchees for the element in an array and return index, if the element is not present
// then just return -1

// let arr = [4,2,0,5,3]
// let ele = 10

// function findElement(arr,ele){

//   for(let i = 0 ; i < arr.length ;i++ ){
//     if(arr[i] === ele){
//       return i
//     }
//   }
//   return  -1
// }

// console.log(findElement(arr,ele))

//Write a function that returns the number of negative numbers in an array
// let arr = [2, -9, 17, 0, 1, -10, -4];
// function countNegatives(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = countNegatives(arr);
// console.log(result);

//Write a function that returns the largest number in array

// let arr = [5,0,7,10,17,1]
// function findLargest(arr){
//   let max = -Infinity;//arr[0]
//   for(let i = 0 ; i < arr.length ;i++){
//     if(max < arr[i]){
//       max = arr[i]
//     }
//   }
//   return max
// }

// let result = findLargest(arr)
// console.log(result)

let arr = [5, 0, 7, 10, 17, 1];
function findSmallest(arr){
  let small = Infinity
  for(let i = 0 ; i < arr.length ;i++){
    if(arr[i]<small){
      small = arr[i]
    }
  }
  return small

}

let result = findSmallest(arr)
console.log(result)