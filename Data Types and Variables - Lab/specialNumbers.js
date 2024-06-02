function specialNumbers(n) {
  let sum = 0;

  for (let index = 1; index <= n; index++) {
    sum = 0;
    let indexAsStr = String(index);
    for (let j = 0; j < indexAsStr.length; j++) {
      let element = Number(indexAsStr[j]);
      sum += element;
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${index} -> True`);
    } else {
      console.log(`${index} -> False`);
    }
  }
}
specialNumbers(15);
