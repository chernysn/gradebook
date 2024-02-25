function addAssignment() {
  const assignmentName = document.getElementById("assignment-name");
  const assignmentDescription = document.getElementById(
    "assignment-description"
  );
  let schoolData = JSON.parse(localStorage.getItem("schoolData")) || [];

  const newAssignment = {
    assignmentName: assignmentName.value,
    assignmentDescription: assignmentDescription.value,
    assignmentScore: 0,
  };

  schoolData.forEach((item) => {
    if (!item.assignments) {
      item.assignments = [];
    }

    item.assignments.push(newAssignment);
  });

  localStorage.setItem("schoolData", JSON.stringify(schoolData));
}
