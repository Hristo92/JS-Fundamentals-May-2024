function RightPlace(string1, char, string2) {
  let text = "";
  for (let index = 0; index < string1.length; index++) {
    let element = string1[index];
    if (element === "_") {
      element = char;
    }
    text += element;
  }

  if (text === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
RightPlace("Str_ng", "i", "String");
