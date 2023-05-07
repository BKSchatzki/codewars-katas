/* Parameters, returns, examples
- Take a number
- Return its opposite
- 10 returns -10
  105 returns -105
*/

/* Pseudocode walkthrough
- Reassign number to self minus doubled self
*/

// Original solution submitted to Codewars
function opposite(number) {
  // Assign new value to number, by multiplying by two and subtracting it.
  number = number - (number * 2);
  return number;
}

/* Reflection
- I should have just returned -number, but I wanted to try a mathematical solution
- Can also add validation to alert user if argument isn't a number or if NaN is returned
*/
