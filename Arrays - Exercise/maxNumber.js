function maxNumber(array) {
  let topNumArr = [];
  let isTop = false;

  for (let index = 0; index < array.length; index++) {
    let element1 = array[index];
    for (let j = index + 1; j <= array.length; j++) {
      let element2 = array[j];
      if (element1 > element2) {
        isTop = true;
        continue;
      } else {
        if (element2 === undefined) {
          isTop = true;
          break;
        }
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topNumArr.push(element1);
    }
  }
  console.log(topNumArr.join(" "));
}
//maxNumber([27, 19, 42, 2, 13, 45, 48]);
maxNumber([1, 4, 3, 2]);
