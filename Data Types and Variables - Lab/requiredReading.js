function requiredReading(numOfPages, pagesPerHour, days) {
  let hours = numOfPages / pagesPerHour;
  let hoursPerDay = hours / days;
  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
