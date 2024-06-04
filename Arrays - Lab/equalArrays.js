function equalArrays(arr1, arr2) {
  let sum = 0;

  for (let index = 0; index < arr1.length; index++) {
    let element1 = Number(arr1[index]);
    for (let j = index; j < arr2.length; j++) {
      let element2 = Number(arr2[j]);
      if (element1 === element2) {
        sum += element1;
        break;
      } else {
        console.log(
          `Arrays are not identical. Found difference at ${index} index`
        );
        return;
      }
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
