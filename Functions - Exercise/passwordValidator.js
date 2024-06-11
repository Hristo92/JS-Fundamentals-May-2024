function passwordValidator(password) {
  let isValidLength = false;
  let isLetterOrDigit = false;
  let hasTwoDigits = false;

  function validCharLength(password) {
    if (password.length >= 6 && password.length <= 10) {
      isValidLength = true;
    } else {
      isValidLength = false;
      console.log("Password must be between 6 and 10 characters");
    }
  }
  validCharLength(password);

  function onlyLettersAndDigits(password) {
    let passwordSymbols = password.split("");
    let isNotDigitOrLetter = false;
    let isDigit = false;
    let isSmallLetter = false;
    let isBigLetter = false;

    for (let index = 48; index <= 57; index++) {
      let element = String.fromCharCode([index]);
      if (passwordSymbols.includes(element)) {
        isDigit = true;
      } else {
        isNotDigitOrLetter = true;
        break;
      }
    }

    for (let index = 97; index <= 122; index++) {
      let element = String.fromCharCode([index]);
      if (passwordSymbols.includes(element)) {
        isSmallLetter = true;
      } else {
        isNotDigitOrLetter = true;
        break;
      }
    }

    for (let index = 65; index <= 90; index++) {
      let element = String.fromCharCode([index]);
      if (!passwordSymbols.includes(element)) {
        isBigLetter = true;
      } else {
        isNotDigitOrLetter = true;
        break;
      }
    }
    if (!isNotDigitOrLetter && isDigit && isSmallLetter && isBigLetter) {
      isLetterOrDigit = true;
    } else {
      console.log("Password must consist only of letters and digits");
    }
  }
  onlyLettersAndDigits(password);

  function twoDigits(password) {
    let splitted = password.split("");
    let digitCounter = 0;
    for (let index = 0; index < splitted.length; index++) {
      let element = Number(splitted[index]);
      if (element >= 0 && element <= 9) {
        digitCounter++;
        if (digitCounter >= 2) {
          hasTwoDigits = true;
          return;
        }
      }
    }
    hasTwoDigits = false;
    console.log("Password must have at least 2 digits");
  }
  twoDigits(password);

  if (isLetterOrDigit && isValidLength && hasTwoDigits) {
    console.log("Password is valid");
  }
}

passwordValidator("MyPass123");
