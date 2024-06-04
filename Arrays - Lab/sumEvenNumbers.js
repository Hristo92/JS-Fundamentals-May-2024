function sumEvenNumbers(nums) {
  let sum = 0;
  for (const num of nums) {
    let number = Number(num);
    if (number % 2 === 0) {
      sum += number;
    }
  }
  console.log(sum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
