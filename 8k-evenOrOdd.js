// Use % 2 to check whether there is remainder when dividing by 2. If not, then the number is even. If yes, it is odd.

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// I'd use a ternary and an arrow function to compact this into one line.
