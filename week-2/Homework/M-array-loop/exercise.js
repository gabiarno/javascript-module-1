/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function startsWithT(daysOfWeek) {
  for (let index = 0; index < daysOfWeek.length; index++) {
    if (daysOfWeek[index][0]==="T") {
      console.log(daysOfWeek[index]);
    }
    
  }
  
}
 startsWithT(daysOfWeek);
