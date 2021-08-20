const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 10 };

const labels = [
  "Frontend",
  "Backend",
  "Mobile",
  "DB & ORM",
  "Cloud computing",
  "Agile project management",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My Stack",
      data: [9, 7, 5, 7, 3, 5],
      borderColor: "#538135",
      backgroundColor: "rgba(130,214,40,0.2)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Skills Radar",
      },
    },
  },
};
export { config };
