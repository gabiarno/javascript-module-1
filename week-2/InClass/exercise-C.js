function numberChecker(num) { //declare function numberChecker
  if (num > 20) { // if num is gretter tha 20
    return `${num} is greater than 20`; // then return is greater than 20
  } else if (num === 20) { // if num is exactly 20
    return `${num} is equal to 20`; // then return is equal to 20
  } else if (num < 20) { // if num is less than 20
    return `${num} is less than 20`; //then return is less tha 20
  } else { // otherwise
    return `${num} isn't even a number :(`; //return isn't even a number
  }
}