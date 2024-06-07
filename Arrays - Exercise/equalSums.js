function equalSums(array) {
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 0; i < array.length; i++) {
    let element1 = array[i];
    sumLeft = 0;
    sumRight = 0;
    for (let j = i + 1; j < array.length; j++) {
      let element2 = array[j];
      sumRight += element2;
    }
    for (let k = 0; k < i; k++) {
      let element3 = array[k];
      sumLeft += element3;
    }

    if (sumLeft === sumRight) {
      console.log(i);
      return;
    }
  }

  if (sumLeft !== sumRight) {
    console.log("no");
  }
}
equalSums([1, 2, 3, 3]);
