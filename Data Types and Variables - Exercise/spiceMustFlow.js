function spiceMustFlow(startingYield) {
  let days = 0;
  let totalSpice = 0;

  for (let index = startingYield; index >= 0; index -= 10) {
    if (index < 100) {
      break;
    }

    days++;

    totalSpice += index - 26;
  }

  if (totalSpice > 0) {
    totalSpice -= 26;
  }

  console.log(days);
  console.log(totalSpice);
}
spiceMustFlow(111);
