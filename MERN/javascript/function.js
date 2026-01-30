// =======================
// Function Basics
// =======================

// function greet() {
//     console.log("Good morning");
// }
// greet();

// // a and b are parameters
// function add(a, b) {
//     console.log(a + b);
// }

// // 5 and 7 are arguments
// add(10, 15);
// add(20, 30);

// function greet(name) {
//     console.log("Good morning", name);
// }
// greet("Ram");


// =======================
// Task 1: BMI Calculator
// =======================

// function BMIcalc(weight, height) {
//     let bmi = weight / (height * height);
//     console.log("Your BMI is:", bmi.toFixed(2));

//     if (bmi < 18.5) {
//         console.log("Underweight");
//     } 
//     else if (bmi >= 18.5 && bmi < 24.9) {
//         console.log("Healthy");
//     } 
//     else if (bmi >= 25 && bmi < 29.9) {
//         console.log("Overweight");
//     } 
//     else {
//         console.log("Obese");
//     }
// }

// BMIcalc(70, 1.78);
// BMIcalc(80, 1.5);
// BMIcalc(50, 1.6);
// BMIcalc(75, 1.63);
// BMIcalc(95, 1.71);
// BMIcalc(65, 1.67);
// BMIcalc(70, 1.68);
// BMIcalc(65, 1.71);


// =======================
// Task 2: Calculator (if-else)
// =======================

// function calculate(num1, num2, operation) {
//     if (operation == "add") {
//         console.log(num1 + num2);
//     }
//     else if (operation == "subtract") {
//         console.log(num1 - num2);
//     }
//     else if (operation == "multiply") {
//         console.log(num1 * num2);
//     }
//     else if (operation == "divide") {
//         console.log(num1 / num2);
//     }
// }

// calculate(26, 55, "add");
// calculate(100, 45, "subtract");
// calculate(12, 5, "multiply");
// calculate(50, 2, "divide");


// =======================
// Calculator using switch
// =======================

// function calculate(num1, num2, operation) {
//     switch (operation) {
//         case "add":
//             console.log(num1 + num2);
//             break;

//         case "subtract":
//             console.log(num1 - num2);
//             break;

//         case "multiply":
//             console.log(num1 * num2);
//             break;

//         case "divide":
//             console.log(num1 / num2);
//             break;
//     }
// }

// calculate(26, 55, "add");
// calculate(100, 45, "subtract");
// calculate(12, 5, "multiply");
// calculate(50, 2, "divide");


// =======================
// Function Expression
// =======================

// const greet = function() {
//     console.log("Hello");
// }
// greet();


// const add = function(a, b) {
//     return a + b;
// }
// const result = add(5, 7);
// console.log(result);

// const subtract = function(a, b) {
//     return a - b;
// }
// const difference = subtract(10, 4);
// console.log(difference);

// same with multiply and divide


// =======================
// Callback Function
// =======================

// function sayHello() {
//     console.log("Hello......");
// }

// function callMe(fn) {
//     fn();
// }

// callMe(function() {
//     console.log("Hello");
// });


// =======================
// Callback Example (Active Code)
// =======================

// function greet1() {
//     console.log("Hello");
// }
 
// const greet2 = function() {
//     console.log("Hello World");
// }
// function callMe(fn) {
//     fn();
// }
// callMe(greet1);
// callMe(greet2);

// function sumarry(a, b, operation) {
//     return operation(a, b);
// }
// const addition = function(x, y) {
//     return x + y;
// }
// const multiplication = function(x, y) {
//     return x * y;
// }
// console.log(sumarry(5, 7, addition));
// console.log(sumarry(5, 7, multiplication));
// console.log(sumarry(10, 3, function(x, y) {
//     return x - y;
// }));
// console.log(sumarry(10, 2, function(x, y) {
//     return x / y;
// }));


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

function reverseArray(arr) {
    return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
