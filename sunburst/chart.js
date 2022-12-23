const svg = d3.select('#mainsvg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const g = svg.append('g')
//.attr('transform', `translate(${width/2}, ${height/2})`);
let root;

// const arc = d3.arc()
//   .startAngle(d => d.x0)
//   .endAbgle(d => x1)
//   .innerRadius(d => y0)
//   .outerRadius()

const render = function (data) {
  const color = d3.scaleOrdinal(d3.schemeCategory10)
  //.domain( data.descendants().filter( d => d.depth !== 1 ).map( d => d.data.name ) );
  const fill = d => {
    if (!d.depth) return "#666666";
    while (d.depth > 1)
      d = d.parent;
    return color(d.data.name);
  };



}


d3.json('./games.json').then(data => {
  root = d3.partition().size([2 * Math.PI, height / 1.6])
    (d3.hierarchy(data).sum(d => d.popularity)
      .sort((a, b) => b.popularity - a.popularity));
  console.log(root)
  render(root);
});
