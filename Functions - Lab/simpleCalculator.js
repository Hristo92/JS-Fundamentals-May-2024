function simpleCalculator(num1, num2, operator) {
  let result = 0;

  let multiply = function (a, b) {
    result = a * b;
  };

  let divide = function (a, b) {
    result = a / b;
  };

  let add = function (a, b) {
    result = a + b;
  };

  let subtract = function (a, b) {
    result = a - b;
  };

  if (operator === "multiply") {
    multiply(num1, num2);
  } else if (operator === "divide") {
    divide(num1, num2);
  } else if (operator === "add") {
    add(num1, num2);
  } else if (operator === "subtract") {
    subtract(num1, num2);
  }

  console.log(result);
}
simpleCalculator(12, 19, "add");
