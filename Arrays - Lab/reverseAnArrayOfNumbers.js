function reverseAnArrayOfNumbers(n, nums) {
  const newArrOfNums = [];

  for (let index = 0; index < n; index++) {
    let num = nums[index];
    newArrOfNums.push(num);
  }

  let reversed = newArrOfNums.reverse().join(" ");

  console.log(reversed);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
