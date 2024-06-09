function signCheck(num1, num2, num3) {
  let result = num1 * num2 * num3;
  let isPositive = Math.sign(result);
  if (isPositive === 1) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(-6, 12, 14);
