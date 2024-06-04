function evenAndOddSubtraction(nums) {
  let sumOfOdd = 0;
  let sumOfEven = 0;

  for (let num of nums) {
    if (num % 2 === 0) {
      sumOfEven += num;
    } else if (num % 2 !== 0) {
      sumOfOdd += num;
    }
  }

  let result = sumOfEven - sumOfOdd;
  console.log(result);
}
evenAndOddSubtraction([3, 5, 7, 9]);
