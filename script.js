// Function to calculate grades and summary
function calculateGrades() {
  const marksInputs = document.querySelectorAll(".marks-input");
  const gradeCells = document.querySelectorAll(".grade");
  let totalMarks = 0;
  let maxMarks = 0;

  marksInputs.forEach((input, index) => {
    const marks = parseInt(input.value) || 0;
    const max = 100; // Each subject has max 100 marks
    totalMarks += marks;
    maxMarks += max;

    // Calculate grade
    let grade = "-";
    if (marks >= 90) grade = "A+";
    else if (marks >= 80) grade = "A";
    else if (marks >= 70) grade = "B";
    else if (marks >= 60) grade = "C";
    else if (marks >= 50) grade = "D";
    else grade = "F";

    // Update grade cell
    gradeCells[index].textContent = grade;
    gradeCells[index].style.color = grade === "F" ? "red" : "green";
  });

  // Calculate percentage and result
  const percentage = ((totalMarks / maxMarks) * 100).toFixed(2);
  const result = percentage >= 40 ? "Pass" : "Fail";

  // Update summary section
  document.getElementById("total-marks").textContent = `${totalMarks}/${maxMarks}`;
  document.getElementById("percentage").textContent = `${percentage}%`;
  document.getElementById("result").textContent = result;
  document.getElementById("result").style.color = result === "Pass" ? "green" : "red";
}

// Add event listener to inputs
document.querySelectorAll(".marks-input").forEach((input) => {
  input.addEventListener("input", calculateGrades);
});
