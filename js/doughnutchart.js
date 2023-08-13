const data = [
    { label: "Tore", value: 24 },
    { label: "Gegentore", value: 7 },
  ];
  
  const width = 100;
  const height = 100;
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius * 0.4;
  
  const color = d3.scaleOrdinal()
    .domain(data.map(d => d.label))
    .range(["rgb(56, 183, 233)", "rgb(185, 80, 211)"]);
  
  const svg = d3.select("#doughnut-chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
  
  const arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(radius);
  
  const pie = d3.pie()
    .value(d => d.value);
  
  const arcs = svg.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");
  
  arcs.append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.data.label));
  
  arcs.append("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("dy", "0.35em")
    .style("text-anchor", "middle")
    .text(d => d.data.value + d.data.label);