function arrayRotation(array, rotations) {
  while (rotations > 0) {
    for (let el of array) {
      array.shift(el);
      array.push(el);
      break;
    }
    rotations--;
  }
  console.log(array.join(" "));
}
arrayRotation([32, 21, 61, 1], 4);
