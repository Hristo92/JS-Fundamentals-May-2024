function integerAndFloat(n1, n2, n3) {
  let sum = n1 + n2 + n3;

  let isInteger = sum % 1 === 0 ? "Integer" : "Float";

  console.log(`${sum} - ${isInteger}`);
}
integerAndFloat(9, 100, 1.1);
