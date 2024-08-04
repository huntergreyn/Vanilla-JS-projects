
let school = {
    classes: [
      {
        Name: "Class A",
        Teacher: "sir. Harwin Strong",
        students: [
          {
            Name: "jace",
            Age: 16,
            Address: "Dragonstone",
            Phone: "091799284629",
            Score: 20,
          },
          {
            Name: "luke",
            Age: 14,
            Address: "Driftmark",
            Phone: "0990655272",
            Score: 20,
          },
        ],
      },
      {
        Name: "Class B",
        Teacher: "Sir Cristian Cole",
        students: [
          {
            Name: "aegon",
            Age: 20,
            Address: "Kingslanding",
            Phone: "342760972",
            Score: 19,
          },
          {
            Name: "helaena",
            Age: 19,
            Address: "Kingslanding",
            Phone: "824537822",
            Score: 20,
          },
        ],
      },
    ],
  };
  
  console.log(school.classes);
  console.log(school.classes[1].students[1].family);