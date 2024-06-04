function sumFirstAndLastArrayElements(array) {
  let first = array[0];
  let last = array[array.length - 1];
  let sum = first + last;
  console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);
