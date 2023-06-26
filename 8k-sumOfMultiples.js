/* Parameters, returns, examples
- Find the sum of all multiples of n below m, not including m
- If m is less than or equal to n return "INVALID"
- (2, 10) returns 20 (2 + 4 + 6 + 8)
  (5, 10) returns 5 (doesn't include 10)
*/

/* Pseudocode walkthrough
- Initialize sum as 0
- Check that m is not equal to or less than n, returning "INVALID" if so
- Loop from n up to but not including m
- Add current value of loop to sum if mod n is 0
*/

function sumMul(n,m) {
  let sum = 0;
  if (n >= m) return "INVALID";
  for (let i = n; i < m; i++) {
    if (i % n === 0) sum += i;
  }
  return sum;
}

/* Reflection
- There may be a cool way to get this done with an array
- This code can be compressed, but it would affect readability
*/