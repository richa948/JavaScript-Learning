// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (eve) => {
// //     console.log(eve);
// //     console.log(eve.type);
// //     console.log(eve.target);
// //     console.log(eve.clientX, eve.clientY);
// // }

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler1");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked - handler2");
    
// });


// const handler3 = () => {
//     console.log("button was clicked - handler3");
// };

// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", (evt) => {
//     console.log("button was clicked - handler4");
//     console.log(evt.type);
// });

// // let div = document.querySelector("div");
// // div.onmouseover = () => {
// // console.log("you are inside div");
// // };

// btn1.removeEventListener("click", handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click" , () => {
   if(currMode === "light"){
    currMode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
   }
   else{
    currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");

   }

   console.log(currMode);
});