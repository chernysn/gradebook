function editScore(i, j) {
  const cell = document.getElementById(`assignment_${i}_${j}`);
  cell.readOnly = false;

  cell.addEventListener("blur", () => {
    updateScore(i, j, cell);
  });

  cell.addEventListener("keyup", (event) => {
    console.log("BYE");
    if (event.key === "Enter") {
      updateScore(i, j, cell);
    }
  });

  function updateScore(i, j, cell) {
    let schoolData = JSON.parse(localStorage.getItem("schoolData"));
    schoolData[i].assignments[j].assignmentScore = cell.value;
    localStorage.setItem("schoolData", JSON.stringify(schoolData));
    calculateTotalScore(i);
    showChart();
  }
}
