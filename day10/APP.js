function getData(DataId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("data", DataId);
    resolve("success");
   
  }, 5000);
  });
}

//Async-Await :->  *****

//first type
async function getAllData()
{
    await getData(1);
    await getData(2);
    await getData(3);

}

//second type {IIFE}
(async function () 
{
    await getData(1);
    await getData(2);
    await getData(3);

})();

//promises :-> ******

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      console.log("data1");
//      resolve("success");
//     }, 3000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      console.log("data2");
//      resolve("success");
//     }, 6000);
//   });
// }

// console.log("fetching data1..");
// asyncFunc1().then((res) => {
//   console.log("fetching data2..");
//   asyncFunc2().then((res) => {});
  
// });

// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//     console.log("i want a promise");
//     // resolve("success");
//     reject("error");
//  });

// };
// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch(() => {
//      console.log("promise rejected");
// });


// //promise chain :->  ******

// getData(1).then((res) => {
//   return getData(2);
// })
// .then((res) => {
//   console.log(res);
// });



