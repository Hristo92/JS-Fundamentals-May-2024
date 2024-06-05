function equalSums(array) {
  let sumLeft = 0;
  let sumRight = 0;
  let isToTheLeft = false;
  let isToTheRight = false;

  for (let i = 0; i < array.length; i++) {
    let element1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let element2 = array[j];
      sumRight += element2;
      if (sumRight === element1) {
        isToTheRight = true;
      }
    }
    for (let k = 0; k < i; k++) {
      let element3 = array[k - 1];
      if (element3 === undefined) {
        break;
      }
      sumLeft += element3;
      if (sumLeft === element1) {
        isToTheLeft = true;
      }
    }
    if (isToTheLeft && isToTheRight) {
      console.log(i);
    }
    sumLeft = 0;
    sumRight = 0;
  }
}
equalSums([1, 2, 3, 3]);
