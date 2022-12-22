const svg = d3.select('#mainsvg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const margin = { top: 120, right: 200, bottom: 100, left: 200 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg.append('g').attr('id', 'maingroup')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);
const xValue = d => moment(d.month).format('YYY-M-D')
const naiveData = [
  { month: new Date(2015, 0, 1), apples: 3840, bananas: 1920, cherries: 960, dates: 400 },
  { month: new Date(2015, 1, 1), apples: 1600, bananas: 1440, cherries: 960, dates: 400 },
  { month: new Date(2015, 2, 1), apples: 640, bananas: 960, cherries: 640, dates: 400 },
  { month: new Date(2015, 3, 1), apples: 320, bananas: 480, cherries: 640, dates: 400 }
];
const naiveKeys = ["apples", "bananas", "cherries", "dates"];


let naiveStack = d3.stack()
.keys(naiveKeys)
.order(d3.stackOrderNone)(naiveData);

const yScale = d3.scaleLinear()
.domain([0, d3.max(naiveStack, d => d3.max(d, sub => sub[1]))])
.range([innerHeight, 0]).nice()

const xScale = d3.scaleBand()
.domain(naiveData.map(d => xValue(d)))
.range([0,innerWidth])
.padding(0.5);



naiveAxes();
// const xAxis = d3.axisBottom(xScale).tickSize(-innerHeight)
// const xAxisGroup = g.append('g').attr('id', 'xaxis').call(xAxis)
// .attr('transform', `translate(0, ${innerHeight})`);

// const yAxis = d3.axisLeft(yScale).tickSize(-innerWidth);
// const yAxisGroup = g.append('g').attr('id', 'yaxis').call(yAxis);

const color = d3.scaleOrdinal()
.domain(naiveKeys)
.range(d3.schemeSet3);

// data join
g.selectAll('.datagroup').data(naiveStack).join('g').attr("class", 'datagroup')
.attr("fill", d => color(d.key))
.selectAll('.datarect').data(d => d).join('rect').attr("class", "datarect")
.attr("y", d=>yScale(d[1]))
.attr("x", d=>xScale(xValue(d.data)))
.attr("width", xScale.bandwidth())
.attr("height", d => yScale(d[0])-yScale(d[1]))
