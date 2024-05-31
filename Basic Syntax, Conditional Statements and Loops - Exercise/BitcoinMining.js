function BitcoinMining(array) {
  let moneyForGold = 0;
  let firstBitcoin = 0;
  let bitcoins = 0;
  let days = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    days++;
    if (days % 3 === 0) {
      element -= element * 0.3;
    }
    moneyForGold += element * 67.51;

    if (moneyForGold >= 11949.16) {
      while (moneyForGold > 11949.16) {
        bitcoins++;
        if (bitcoins === 1) {
          firstBitcoin = days;
        }
        moneyForGold -= 11949.16;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  }
  console.log(`Left money: ${moneyForGold.toFixed(2)} lv.`);
}
BitcoinMining([50, 100]);
