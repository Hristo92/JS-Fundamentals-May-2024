function mergeArrays(arr1, arr2) {
  const arr3 = [];

  for (let index = 0; index < arr1.length; index++) {
    let element1 = arr1[index];
    let element2 = arr2[index];
    if (index % 2 === 0) {
      element1 = Number(element1);
      element2 = Number(element2);
      arr3.push(element1 + element2);
    } else if (index % 2 !== 0) {
      arr3.push(element1 + element2);
    }
  }

  console.log(arr3.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
