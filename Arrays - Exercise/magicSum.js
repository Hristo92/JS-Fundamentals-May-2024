function magicSum(array, num) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    for (let j = index + 1; j < array.length; j++) {
      let element2 = array[j];
      sum = element + element2;
      if (sum === num) {
        console.log(element, element2);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
