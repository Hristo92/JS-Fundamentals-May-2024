function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;

  for (let index = 0; index <= 100; index++) {
    if (index % 2 === 1) {
      console.log(index);
      sum += index;
      counter++;
      if (counter >= n) {
        break;
      }
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
