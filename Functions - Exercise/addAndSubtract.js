function addAndSubtract(num1, num2, num3) {
  function sum(a, b) {
    let result = a + b;
    return result;
  }

  function subtract(a, b) {
    let result = a - b;
    return result;
  }

  return subtract(sum(num1, num2), num3);
}
let res = addAndSubtract(1, 17, 30);
console.log(res);
