function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let index = 5; index < 20; index++) {
  if (isEven(index)){
    let exp = exponential(index)
    console.log(`The exponential of ${index} is ${exp}`);
  }
  
}