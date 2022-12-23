const svg = d3.select('#mainsvg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const g = svg.append('g')
//.attr('transform', `translate(${width/2}, ${height/2})`);
let root;

const render = function (data) {
  const color = d3.scaleOrdinal(d3.schemeCategory10)
  //.domain( data.descendants().filter( d => d.depth !== 1 ).map( d => d.data.name ) );
  const fill = d => {
    if (!d.depth) return "#666666";
    while (d.depth > 1)
      d = d.parent;
    return color(d.data.name);
  };

  g.selectAll(".datarect")
    .data(data.descendants())
    .join("rect")
    .attr("class", "datarect")
    .attr("fill", fill)
    .attr('x', d => d.y0)
    .attr('y', d => d.x0)
    .attr('height', d => d.x1 - d.x0)
    .attr('width', d => d.y1 - d.y0)

  g.selectAll(".datatext").data(data.descendants()).join("text").attr("class", "datatext")
  .attr("x", d => (d.y0+d.y1)/2)
  .attr("y", d => (d.x0+d.x1)/2)
  .attr("text-anchor", 'middle')
  .text(d=>d.data.name)


}


d3.json('./games.json').then(data => {
  root = d3.partition().size([height, width])
    (d3.hierarchy(data).sum(d => d.popularity)
      .sort((a, b) => b.popularity - a.popularity));

  render(root);
});
