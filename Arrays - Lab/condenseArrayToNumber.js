function condenseArrayToNumber(array) {
  let sum = 0;
  let condensed = [];
  if (array.length <= 1) {
    console.log(array[0]);
    return;
  }

  for (let index = 0; index < array.length; index++) {
    let element1 = array[index];

    for (let j = index + 1; j < array.length; j++) {
      let element2 = array[j];
      sum = element1 + element2;
      condensed[index] = sum;
      if (condensed.length === array.length - 1) {
        array = condensed;
        condensed = [];
        index = -1;
      }
      break;
    }
  }

  console.log(sum);
}
condenseArrayToNumber([2, 10, 3]);
