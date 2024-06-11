function palindromeIntegers(array) {
  for (let index = 0; index < array.length; index++) {
    let element = String(array[index]);
    let reversed = element.split("").reverse().join("");
    if (element === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
