function PrintAndSum(start, end) {
  let nums = "";
  let sum = 0;

  for (let index = start; index <= end; index++) {
    sum += index;
    nums += index + " ";
  }
  console.log(nums);
  console.log(`Sum: ${sum}`);
}
PrintAndSum(0, 26);
