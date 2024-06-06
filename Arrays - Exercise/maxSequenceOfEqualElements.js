function maxSequenceOfEqualElements(arr) {
  let longest = [];
  let current = [];

  //   for (let index = 0; index < array.length; index++) {
  //     let element = array[index];
  //     current.push(element);

  //     if (current.includes(element)) {
  //       current.push(element);
  //     }

  //     if (current.length > longest.length) {
  //       longest = current;
  //     }
  //   }

  //   console.log(longest.join(" "));

  let longestSeq = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let currentSeq = [currNum];

    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];

      if (currNum === nextNum) {
        currentSeq.push(nextNum);
      } else {
        break;
      }
    }
    if (currentSeq.length > longestSeq.length) {
      longestSeq = currentSeq;
    }
  }

  console.log(longestSeq.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
