function dayOfWeek(n) {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (n <= 0 || n > 7 || n % 1 != 0) {
    console.log("Invalid day!");
  } else {
    console.log(weekDays[n - 1]);
  }
}
dayOfWeek(3.5);
