// Here is an example using the plus operator to concat strings
const greetingStart = "Hello, my name is ";
const myName = "Gabi";

const greeting = greetingStart + myName;
console.log("First method:");
console.log(greeting); // Logs "Hello, my name is Gabi"

// Here is example using the String interpolation to concat strings
const greetingStart2 = "Hello";
const greeting2 = `${greetingStart2}, my name is ${myName}`;
console.log("Second method:");
console.log(greeting2); // Logs "Hello, my name is Gabi"