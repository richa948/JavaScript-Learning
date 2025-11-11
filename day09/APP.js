// class toyotaCar{
//    constructor(brand, mileage){
//     console.log("creating new object");
//     this.brand = brand;
//     this.mileage = mileage;
//    }
    
//     start (){
//         console.log("start");
//     }

//      stop (){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new toyotaCar("fortuner", 10);

// let nexon = new toyotaCar("nexon",12);

//next topic :->
// class person{
// constructor (name){
//  this.species = "homo sapiens";
//  this.name = name;

//  }

// eat(){
//     console.log("eat");
//  }

// }
// class engineer extends person{
//     constructor (name){
//         super(name); //to invoke parent class constructor
//     }
//   work(){
//     super.eat();
//     console.log("solve something");
//   }
// }
// let harryObj = new engineer();

//practice Q 1 :->

let Data = "secret information";
class User {
    constructor (name, email){
     this.name = name;
     this.email = email;
    }

    viewData() {
        console.log("data is = ", Data);
    }
}

class Admin extends User {
  constructor (name, email) {
  super(name, email);
  }  
 editData(){
    Data = "new data edit";
 }
}
let stu1 = new User("harry" , "abc@email.com");
let stu2 = new User("john" , "pqr@email.com");

let teac1 = new User("dean", "dean@email.com");
let teac2 = new User("hod", "hod@email.com"); 

let admin = new Admin("admin", "admin@college.com");