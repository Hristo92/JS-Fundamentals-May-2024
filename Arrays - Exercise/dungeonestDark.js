function dungeonestDark(array) {
  let coins = 0;
  let initialHealth = 100;
  let roomCount = 0;
  let length = 0;
  let healed = 0;

  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let splitted = element.split("|");
    length = splitted.length;
    for (let index = 0; index < splitted.length; index++) {
      roomCount++;
      let element1 = splitted[index];
      let splitted1 = element1.split(" ");
      if (splitted1[0] === "potion") {
        healed = 100 - initialHealth;
        initialHealth += Number(splitted1[1]);

        if (initialHealth > 100) {
          initialHealth = 100;
        } else {
          healed = splitted1[1];
        }
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
      } else if (splitted1[0] === "chest") {
        coins += Number(splitted1[1]);
        console.log(`You found ${splitted1[1]} coins.`);
      } else {
        initialHealth -= Number(splitted1[1]);
        if (initialHealth > 0) {
          console.log(`You slayed ${splitted1[0]}.`);
        } else {
          console.log(`You died! Killed by ${splitted1[0]}.`);
          console.log(`Best room: ${roomCount}`);
          return;
        }
      }
    }
  }

  if (roomCount === length) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${initialHealth}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
