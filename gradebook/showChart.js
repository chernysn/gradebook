function showChart() {
  const schoolData = JSON.parse(localStorage.getItem("schoolData")) || [];
  const students = schoolData.map((item) => item.name);

  const averageScores = schoolData.map((item) => {
    let t = 0;
    const totalScore = item.assignments.map(
      (assignment) => (t += parseInt(assignment.assignmentScore))
    );
    const numberOfAssignments = item.assignments.length;
    const averageScore = numberOfAssignments > 0 ? t / numberOfAssignments : 0;
    return { name: item.name, avscore: averageScore };
  });

  const defineHeight = averageScores.length * 40;

  const sorted = averageScores.sort((a, b) => b.avscore - a.avscore);

  const names = sorted.map((obj) => obj.name);
  const scores = sorted.map((obj) => obj.avscore.toFixed(2));

  const colorScale = d3
    .scaleThreshold()
    .domain([0, 60, 70, 80, 90, 100])
    .range(["#7209b7", "#480ca8", "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"]);

  const svg = d3
    .select(".chart")
    .attr("width", "90%")
    .attr("height", `${defineHeight}`);

  svg.selectAll("*").remove();

  svg
    .selectAll(".bar")
    .data(scores)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", (d) => `${d / 1.5}%`) // Scale the width by 3 for better visibility
    .attr("height", 30)
    .attr("y", (d, i) => i * 40) // Space bars vertically
    .attr("x", 80)
    .style("fill", (d) => colorScale(d));

  svg
    .selectAll(".label-name")
    .data(names)
    .enter()
    .append("text")
    .attr("class", "label-name")
    .attr("x", 0)
    .attr("y", (d, i) => i * 40 + 20) // Adjust the vertical position for labels
    .text((d) => d);

  svg
    .selectAll(".label-score")
    .data(scores)
    .enter()
    .append("text")
    .attr("class", "label-score")
    .attr("x", (d) => `${d / 1.5 + 20}%`)
    .attr("y", (d, i) => i * 40 + 20) // Adjust the vertical position for labels
    .text((d) => d + "%");
}
