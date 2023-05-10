/* Parameters, returns, examples
- Check whether an entered number is even or odd
- Return "even" or "odd"
- (2) returns true
  (3) returns false
  (-55) returns false
*/

/* Pseudocode walkthrough
- If mod 2 is 0, return even, else return odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

/* Reflection
- Use an arrow function and a ternary to compact the function into one line
*/
