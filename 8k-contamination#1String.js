/* Parameters, returns, examples
- Replace all characters of a string with entered character
- Return string of same length as text parameter containing only char parameter
- ("Hello", "a") returns "aaaaa"
  ("Hey there", "#") returns "#########"
*/

/* Pseudocode walkthrough
- Check whether either argument is missing or blank, and return blank if so
- Create variable output
- Loop through original string, concatenating character to output
- Return output after loop is finished
*/

function contamination(text, char){
  // Check if either argument is a blank string. If so, return blank string.
  if (text === "") {
    return "";
  } else if (char === "") {
    return "";
  } else {
  // Create variable called output. Use text.length to loop through, concatenating char to output. Return output.
    let output = ""
    for (let i = 0; i < text.length; i++) {
      output += char;
    }
    return output;
  }
}

/* Reflection
- Can return self if blank instead of hardcoding blank string
- Can split into array, map, then join
*/
