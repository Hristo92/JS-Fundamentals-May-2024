function orders(product, quantity) {
  //   let totalPrice = 0;

  //   if (product === "coffee") {
  //     totalPrice += quantity * 1.5;
  //   } else if (product === "water") {
  //     totalPrice += quantity * 1;
  //   } else if (product === "coke") {
  //     totalPrice += quantity * 1.4;
  //   } else if (product === "snacks") {
  //     totalPrice += quantity * 2;
  //   }

  //console.log(totalPrice.toFixed(2));

  let coffee = (a) => (a * 1.5).toFixed(2);
  let water = (a) => (a * 1).toFixed(2);
  let coke = (a) => (a * 1.4).toFixed(2);
  let snacks = (a) => (a * 2).toFixed(2);

  if (product === "coffee") {
    return coffee(quantity);
  } else if (product === "water") {
    return water(quantity);
  } else if (product === "coke") {
    return coke(quantity);
  } else if (product === "snacks") {
    return snacks(quantity);
  }
}
let res = orders("snacks", 5);
console.log(res);
