/* Parameters, returns, examples
- Change light to next in traffic light sequence
- Return "green", "yellow", or "red"
- ("green") returns "yellow"
  ("yellow") returns "red"
  ("red") returns "green"
*/

/* Pseudocode walkthrough
- Switch cases, leading from one to the next
*/

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    case "red":
      return "green";
      break;
  }
}

/* Reflection
- Can add error validation
- Can convert all input to lowercase
- Easy enough to make this work in the browser with buttons, using event listeners rather than passing arguments
*/
