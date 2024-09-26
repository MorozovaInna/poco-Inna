let num = Number(prompt("Please enter a number: "));

if (isNaN(num)) {
  console.log("This is not a number.");
} else if (!Number.isInteger(num)) {
  console.log("Please enter a valid integer.");
} else {
  if (num % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}