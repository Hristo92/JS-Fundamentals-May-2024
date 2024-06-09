function formatGrade(grade) {
  let gradeText = "";

  if (grade < 3) {
    console.log("Fail (2)");
    return;
  } else if (grade >= 3 && grade < 3.5) {
    gradeText = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    gradeText = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    gradeText = "Very good";
  } else if (grade >= 5.5) {
    gradeText = "Excellent";
  }

  console.log(`${gradeText} (${grade.toFixed(2)})`);
}
formatGrade(2.99);
