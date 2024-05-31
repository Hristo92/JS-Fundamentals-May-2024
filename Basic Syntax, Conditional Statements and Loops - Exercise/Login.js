function Login(array) {
  let username = array.shift();
  let tries = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let reversed = element.split("").reverse().join("");
    if (reversed === username) {
      console.log(`User ${username} logged in.`);
    } else {
      tries++;
      if (tries > 3) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}
Login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
