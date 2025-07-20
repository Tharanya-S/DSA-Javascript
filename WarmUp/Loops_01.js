// for(let i = 0 ; i <= 5 ; i ++){
//   console.log("Hello World "+ i)
// }

// for(let i = 3 ; i < 5 ; i++){
//   console.log("Hello World " + i)
// }

// for(let i = 2 ; i < 9 ; i = i + 2){
//   console.log(i)//2,4,6,8
// }

// for(let i = 5 ; i > 0 ; i--){
//   console.log(i)//5,4,3,2,1
// }

// for(let i = 5 ; i < 4 ; i++){
//   console.log("Hello World")//Noting will print as the loop fails initially
// }

// for(let i = 1 ; i > 0 ;i++){
//   console.log(i)//Infinite loop
// }

// function greet(i){
//   console.log("Greet "+ i)
// }

// for(let i = 0 ;i < 5 ; i++){
//   greet(i)
// }

let arr = [10, 6, 2, 0, 8,1,7,9];
let len = arr.length;
console.log(len);
// console.log(arr[0])
for (let i = 0; i < len; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
