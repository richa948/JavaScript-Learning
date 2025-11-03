// let arr = [1, 2, 3, 4, 5, 6];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
// return res + curr;
// });

// console.log(output);

// let marks = [12, 46, 36, 58, 69, 39];

// let toppers = marks.filter((val) => {
//     return val > 30;
// });

// console.log(toppers);

//practice question
let n = prompt("enter a number :");
let arr = [];
for(let i = 1; i <= n; i++){
arr[i-1] = i;
};
console.log(arr);

let sum = arr.reduce((prev, curr) => {
return prev + curr;
});

console.log("sum = " ,sum);

let product = arr.reduce((prev, curr) => {
return prev * curr;
});

console.log("product = " ,product);
