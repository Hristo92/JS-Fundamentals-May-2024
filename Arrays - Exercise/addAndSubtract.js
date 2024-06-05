function addAndSubtract(array) {
  let sumOriginalArray = 0;
  let sumModifiedArray = 0;
  const modifiedArray = [];

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    sumOriginalArray += element;
    if (element % 2 === 0) {
      element += index;
    } else if (element % 2 !== 0) {
      element -= index;
    }
    sumModifiedArray += element;
    modifiedArray.push(element);
  }
  console.log(modifiedArray);
  console.log(sumOriginalArray);
  console.log(sumModifiedArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
