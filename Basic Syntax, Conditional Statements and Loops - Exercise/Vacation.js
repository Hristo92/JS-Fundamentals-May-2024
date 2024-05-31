function Vacation(groupCount, typeOfGroup, day) {
  let totalPrice = 0;

  switch (day) {
    case "Friday":
      if (typeOfGroup === "Students") {
        totalPrice = groupCount * 8.45;
        if (groupCount >= 30) {
          totalPrice -= totalPrice * 0.15;
        }
      } else if (typeOfGroup === "Business") {
        totalPrice = groupCount * 10.9;
        if (groupCount >= 100) {
          totalPrice -= 10 * 10.9;
        }
      } else if (typeOfGroup === "Regular") {
        totalPrice = groupCount * 15;
        if (groupCount >= 10 && groupCount <= 20) {
          totalPrice -= totalPrice * 0.05;
        }
      }
      break;
    case "Saturday":
      if (typeOfGroup === "Students") {
        totalPrice = groupCount * 9.8;
        if (groupCount >= 30) {
          totalPrice -= totalPrice * 0.15;
        }
      } else if (typeOfGroup === "Business") {
        totalPrice = groupCount * 15.6;
        if (groupCount >= 100) {
          totalPrice -= 10 * 15.6;
        }
      } else if (typeOfGroup === "Regular") {
        totalPrice = groupCount * 20;
        if (groupCount >= 10 && groupCount <= 20) {
          totalPrice -= totalPrice * 0.05;
        }
      }
      break;
    case "Sunday":
      if (typeOfGroup === "Students") {
        totalPrice = groupCount * 10.46;
        if (groupCount >= 30) {
          totalPrice -= totalPrice * 0.15;
        }
      } else if (typeOfGroup === "Business") {
        totalPrice = groupCount * 16;
        if (groupCount >= 100) {
          totalPrice -= 10 * 16;
        }
      } else if (typeOfGroup === "Regular") {
        totalPrice = groupCount * 22.5;
        if (groupCount >= 10 && groupCount <= 20) {
          totalPrice -= totalPrice * 0.05;
        }
      }
      break;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
Vacation(100, "Business", "Sunday");
