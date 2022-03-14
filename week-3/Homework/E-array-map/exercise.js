// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function per100(number) {
    return number*100;   
}

console.log("First solution: " + numbers.map(per100));

console.log("Second solution: " + numbers.map(function per100(number) {
    return number*100;   
}));

console.log("Third solution: " + numbers.map(number => number*100));

