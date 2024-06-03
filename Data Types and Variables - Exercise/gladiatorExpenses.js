function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldBrakeCounter = 0;

  for (let index = 1; index <= lostFights; index++) {
    if (index % 2 === 0) {
      expenses += helmetPrice;
    }
    if (index % 3 === 0) {
      expenses += swordPrice;
    }
    if (index % 2 === 0 && index % 3 === 0) {
      shieldBrakeCounter++;
      expenses += shieldPrice;
      if (shieldBrakeCounter % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
