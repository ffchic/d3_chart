const data = [
    { "name": "张三", "value": 10 },
    { "name": "李四", "value": 17 },
    { "name": "王五", "value": 9 },
    { "name": "赵六", "value": 4 },
    { "name": "小明", "value": 17 },
    { "name": "小花", "value": 12 },
    { "name": "小红", "value": 15 },
    { "name": "老王", "value": 23 },
    { "name": "老李", "value": 3 },
    { "name": "老张", "value": 11 },
]
var margin = { top: 50, right: 50, bottom: 70, left: 50 };


const svg = d3.select('#mainsvg')
var width = +svg.attr("width")
var height = +svg.attr("height")
const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.left - margin.right
// 定义比例尺
console.log(innerWidth)
const xScale = d3.scaleLinear()
.domain([0, d3.max(data, d => d.value)])
.range([0, innerWidth]);

const yScale = d3.scaleBand()
.domain(data.map(d => d.name))
.range([0,innerHeight])
.padding(0.2);

// 定义画布
const g = svg.append('g').attr("id", "maingroup")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// 绘制x,y轴
const yAxis = d3.axisLeft(yScale);
g.append("g").call(yAxis);

const xAxis = d3.axisBottom(xScale);
g.append("g").call(xAxis).attr('transform', `translate(0, ${innerHeight})`)

// 或者条带
data.forEach(d => {
    g.append("rect")
    .attr("width", xScale(d.value))
    .attr("height", yScale.bandwidth())
    .attr("fill", "green")
    .attr("y", yScale(d.name))
})

// 修改坐标轴的刻度字体
d3.selectAll('.tick text').attr("font-size", '2em')

//添加标题
g.append("text").text("横向柱形图")
.attr("font-size", '3em')
.attr("transform", `translate(${innerWidth/2},0)`)
.attr("text-anchor", "middle")























