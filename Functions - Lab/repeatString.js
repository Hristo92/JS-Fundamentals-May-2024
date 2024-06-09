function repeatString(string, repeatNum) {
  let text = "";

  for (let index = 0; index < repeatNum; index++) {
    text += string;
  }
  console.log(text);
}
repeatString("String", 2);
