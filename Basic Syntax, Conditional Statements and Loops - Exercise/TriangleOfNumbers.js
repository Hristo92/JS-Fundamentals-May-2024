function TriangleOfNumbers(n) {
  let nums = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      nums += i + " ";
    }
    console.log(nums + " ");
    nums = "";
  }
}
TriangleOfNumbers(5);
