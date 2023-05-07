/* Parameters, returns, examples
- Take any array
- Return it in reversed order
- ["Hi", 4, "there"] returns ["there", 4, "Hi"]
*/

/* Pseudocode walkthrough
- Return the given array with the reverse method on it
*/

// Original solution submitted to Codewars
function fixTheMeerkat(arr) {
  return arr.reverse();
}

/* Reflection
- This is pretty straightforward, but there are ways to do this manually
  Could use decrementing for-loop and push to new array
  Could use incrementing for-loop and unshift to new array
  Could map to new array and access array inside callback function
*/
