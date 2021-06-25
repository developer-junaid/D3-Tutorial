// Select svg container
const svg = d3.select("svg");

// Get data
d3.json("planets.json").then((data) => {
  // On success
  const circs = svg.selectAll("circle").data(data); // Join Data

  // Add Attrs to already present circles
  circs
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("fill", (d) => d.fill)
    .attr("r", (d) => d.radius);

  // Add Attrs to enter selection
  circs
    .enter()
    .append("circle")
    .attr("cy", 200)
    .attr("cx", (d) => d.distance)
    .attr("fill", (d) => d.fill)
    .attr("r", (d) => d.radius);
});
