outputScores();

function outputScores() {
  const heading = document.getElementById("table-heading");
  const list = document.getElementById("list");
  heading.innerHTML = "";
  list.innerHTML = "";
  let schoolData =
    JSON.parse(localStorage.getItem("schoolData")) || studentData;

  const allHeadings = schoolData[0].assignments.map(
    (assignment) => assignment.assignmentName
  );

  heading.innerHTML += `<tr><td>Name</td>${allHeadings.map(
    (heading, index) => `<td>${heading}</td>`
  )}<td>Average Score</td><td> Delete</td> </tr>`;

  schoolData.forEach((item, i) => {
    list.innerHTML += `<tr><td>${item.name}</td>
    ${item.assignments
      .map(
        (assignment, j) =>
          `<td><input class="edit-score" value="${assignment.assignmentScore}" id="assignment_${i}_${j}"
        onClick="editScore(${i}, ${j})"></td>`
      )
      .join("")}
    <td class="averageScore" id="averageScore_${i}"></td>
    <td class="delete" onClick="deleteStudent(${i})">Delete</td></tr>`;
    calculateTotalScore(i);
  });

  showChart();
}

function calculateTotalScore(i) {
  let schoolData = JSON.parse(localStorage.getItem("schoolData"));
  const averageScore = document.getElementById(`averageScore_${i}`);
  averageScore.innerText = "";
  let totalScore = 0;
  schoolData[i].assignments.forEach((assignment) => {
    totalScore += parseInt(assignment.assignmentScore);
  });
  let average = totalScore / schoolData[i].assignments.length;
  averageScore.innerText = average.toFixed(2);
}

function deleteStudent(index) {
  let schoolData = JSON.parse(localStorage.getItem("schoolData"));
  schoolData.splice(index, 1);
  localStorage.setItem("schoolData", JSON.stringify(schoolData));
  outputScores();
  showChart();
}

function addStudent() {
  let schoolData = JSON.parse(localStorage.getItem("schoolData"));
  console.log(schoolData);
  let assignments = schoolData[0].assignments;
  const name = document.getElementById("student-name");
  const newAssignments = [];
  assignments.forEach((assignment) => {
    let singleNewAssignment = {};
    singleNewAssignment.assignmentScore = 0;
    newAssignments.push(singleNewAssignment);
  });

  schoolData.push({ name: name.value, assignments: newAssignments });
  localStorage.setItem("schoolData", JSON.stringify(schoolData));
  outputScores();
  name.value = "";
}

console.log(JSON.parse(localStorage.getItem("schoolData")));
const list = document.getElementById("list");
