// Data
const data = [
  {
    width: 200,
    height: 100,
    fill: "green",
  },
  {
    width: 100,
    height: 60,
    fill: "pink",
  },
  {
    width: 50,
    height: 30,
    fill: "red",
  },
];

// SVG
const svg = d3.select("svg");

const rect = svg
  .selectAll("rect")
  .data(data)
  .attr("width", (data, index, selection) => data.width)
  .attr("height", (data) => data.height)
  .attr("fill", (data) => data.fill);

console.log(rect);
