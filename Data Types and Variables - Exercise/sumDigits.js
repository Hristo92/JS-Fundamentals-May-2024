function sumDigits(num) {
  let numAsString = String(num);
  let sum = 0;

  for (let index = 0; index < numAsString.length; index++) {
    let element = Number(numAsString[index]);
    sum += element;
  }
  console.log(sum);
}
sumDigits(245678);
