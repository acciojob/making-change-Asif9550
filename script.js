const makeChange = (c) => {
  // Ensure input is parsed as an integer
  c = parseInt(c);

  // Initialize variables for each coin type
  const quarters = Math.floor(c / 25);
  c %= 25;

  const dimes = Math.floor(c / 10);
  c %= 10;

  const nickels = Math.floor(c / 5);
  c %= 5;

  const pennies = c; // Remaining value is the number of pennies

  // Return the object with the breakdown
  return { q: quarters, d: dimes, n: nickels, p: pennies };
};



// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
