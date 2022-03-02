/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 10;

function sumTillNum(num){
	//your code here
	let sum = 0;
	let index = 0;
	while (index <= num) {
		sum = sum + index;
		index = index +1;
		
	}
	
	return sum;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
