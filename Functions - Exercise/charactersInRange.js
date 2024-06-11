function charactersInRange(char1, char2) {
  let char1AsAsciiCode = char1.charCodeAt();
  let char2AsAsciiCode = char2.charCodeAt();

  let start = Math.min(char1AsAsciiCode, char2AsAsciiCode);
  let end = Math.max(char1AsAsciiCode, char2AsAsciiCode);

  let chars = [];

  for (let index = start + 1; index < end; index++) {
    let element = String.fromCharCode([index]);
    chars.push(element);
  }

  console.log(chars.join(" "));
}
charactersInRange("#", ":");
