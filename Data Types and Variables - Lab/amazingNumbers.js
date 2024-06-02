function amazingNumbers(num) {
  let numAsStr = String(num);
  let sum = 0;

  for (let index = 0; index < numAsStr.length; index++) {
    let element = Number(numAsStr[index]);
    sum += element;
  }

  if (sum % 10 === 9) {
    console.log(`${num} Amazing? ${"True"}`);
  } else {
    console.log(`${num} Amazing? ${"False"}`);
  }
}
amazingNumbers(1233);
