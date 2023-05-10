/* Parameters, returns, examples
- Take two numbers
- Return their product
- (1, 1) returns 1
  (0, 1000000) returns 0
  (2, 4) returns 8
*/

/* Pseudocode walkthrough
- Create variable product and assign to two parameters multiplied
- Return product
*/

function multiply(a, b){
  let product = a * b;
  return product;
}

/* Reflection
- Could have returned directly without creating local variable
- Can add check for non-number arguments and alert user if either isn't
*/
