function maxSequenceOfEqualElements(arr) {
  let longest = [];
  let current = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    current = [element];
    for (let j = index + 1; j < arr.length; j++) {
      let element1 = arr[j];
      if (element === element1) {
        current.push(element1);
      } else {
        break;
      }
    }

    if (current.length > longest.length) {
      longest = current;
    }
  }

  console.log(longest.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
