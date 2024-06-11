function NxNMatrix(n) {
  let text = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      text += n + " ";
    }
    console.log(text);
    text = "";
  }
}
NxNMatrix(3);
