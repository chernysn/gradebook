const local = JSON.parse(localStorage.getItem("schoolData"));
if (localStorage.length < 1) {
  let schoolData = [
    {
      name: "John",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Mary",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Anne",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Corinne",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Toni",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Henry",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
    {
      name: "Brooklyn",
      assignments: [
        {
          assignmentName: "Assignment 1",
          assignmentDescription: "This is Assignemtn 1",
          assignmentScore: 0,
        },
      ],
    },
  ];

  localStorage.setItem("schoolData", JSON.stringify(schoolData));
}
