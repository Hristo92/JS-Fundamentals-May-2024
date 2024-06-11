function oddAndEvenSum(number) {
  let numberAsString = String(number);

  let evenSum = 0;
  let oddSum = 0;

  for (let index = 0; index < numberAsString.length; index++) {
    let element = Number(numberAsString[index]);

    if (element % 2 === 0) {
      evenSum += element;
    } else {
      oddSum += element;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);
