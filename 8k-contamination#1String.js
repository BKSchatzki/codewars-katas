// This function is designed to replace all characters of a given string with a given character.

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

// If I were to do this again, I would:
  // I would return the text parameter instead of "" for the first and second conditional.
  // I would return a new array mapped with the char parameter instead of using an output variable and concatenating
