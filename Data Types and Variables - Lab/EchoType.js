function EchoType(paramenter) {
  let type = typeof paramenter;
  if (type === "string" || type === "number") {
    console.log(type);
    console.log(paramenter);
  } else {
    console.log(type);
    console.log("Parameter is not suitable for printing");
  }
}
EchoType(null);
