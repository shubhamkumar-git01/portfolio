// // this is a keyword that refers to the object that calls the function.
// // this is decided at runtime
// // this depends on how the function is called
// // not where it is called or defined

// function sayName() {
//     console.log(`My name is ${this.name}`);
// }
// const person1 = {
//     name: "Tom",
//     sayName: sayName 
//         // // console.log('My name is Tom');
//         // console.log(this.name);

    
// }
// const person2 = {
//     name: "Jerry",
//     sayName: sayName 
//     // function() {
//     //     // console.log('My name is Jerry');
//     //     console.log(this.name);

    
// }
// const person3 = {
//     name: "Spike",
//     sayName: sayName
// }

// const person4 = {
//     name: "Tyke",
//     sayName: sayName
// }

// person1.sayName(); 
// person2.sayName();
// person3.sayName();
// person4.sayName();

// function hello() {
//     console.log(this);
// }
// // function hello() : void
//  hello();

// const user = {
//     name: "John",
//     sayName() {
//         console.log(this.name);
//         setTimeout(function() {
//             console.log(this.name);
//         }, 1000);
//     }
// }
// user.sayName(); 
//  solution undefined
// const user = {
//     name: "John",
//     sayName() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// }
// user.sayName(); 
// setTimeout(() => {
//     console.log('Hello')
    
// }, 1000);
// setInterval(() => {
//     console.log('Hello');
// }, 1000);