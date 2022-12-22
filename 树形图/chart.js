const svg = d3.select('#mainsvg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const margin = { top: 50, right: 150, bottom: 50, left: 60 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);
let root;
let color;


const fill = d => {
  if (d.depth === 0)
      return color(d.data.name)
  while (d.depth > 1) 
      d = d.parent; 
  return color(d.data.name); 
}

const render = function(data){
  color = d3.scaleOrdinal()
  // .domain(root.descendants().filter( d => d.depth <= 1 ).map( d => d.data.name ))
  .range(d3.schemeCategory10);

  g.selectAll("path")
  .data(root.links())
  .join("path")
  .attr("fill", "none")
  .attr("stroke", "black")
  .attr("stroke-width", 1.5)
  .attr("d", d3.linkHorizontal().x(d => d.y).y(d => d.x));

  // descendants就是将所以节点转换为一个list
  console.log(root.descendants())
  g.selectAll('circle').data(root.descendants()).join("circle")
  .attr("cx", d => d.y)
  .attr("cy", d => d.x)
  .attr("fill", fill)
  .attr("r",6)
  .attr("storke-width",3)

  g.selectAll("text").data(root.descendants()).join('text')
  .attr("font-size", "0.8em")
  .attr("x", d => (d.children ? -6 : 6) + d.y)
  .attr("y", d => d.x+5)
  .attr("text-anchor", d=> d.children? "end" : "start")
  .text(d => d.data.name)

}

d3.json('./games.json').then(data => {
  root = d3.hierarchy(data);
  console.log(root)
  root = d3.tree().size([innerHeight, innerWidth])(root);
  render(root)
})