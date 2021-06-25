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

// Join data to rects
const rects = svg.selectAll("rect").data(data);

// add attrs to rects already in the dom
rects
  .attr("width", (data, index, selection) => data.width)
  .attr("height", (data) => data.height)
  .attr("fill", (data) => data.fill);

// Create virtual elements if they aren't there for the data
rects
  .enter()
  .append("rect")
  .attr("width", (data, index, selection) => data.width)
  .attr("height", (data) => data.height)
  .attr("fill", (data) => data.fill);
