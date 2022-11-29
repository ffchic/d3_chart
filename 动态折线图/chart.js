const svg = d3.select('#mainsvg')
const width = +svg.attr('width')
const height = +svg.attr('height')
const margin = { top: 120, right: 50, left: 120, bottom: 50 }
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg.append("g").attr('id', "maingroup")
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
const xValue = (datum) => { return datum['日期'] };
const yValue = (datum) => { return datum['现有确诊'] };
let alldates, allkeys;

const render_init = function (data) {
    xScale = d3.scaleTime()
        .domain(d3.extent(data, xValue))
        .range([0, innerWidth])
        .nice();

    yScale = d3.scaleLinear()
        .domain(d3.extent(data, yValue).reverse())
        .range([0, innerHeight])
        .nice();

    const xAxis = d3.axisBottom(xScale)
        .ticks(Math.floor(alldates.length) / 4)
        .tickSize(-innerHeight);

    const xAxisGroup = g.append('g').call(xAxis)
        .attr('transform', `translate(0, ${innerHeight})`);

    const yAxis = d3.axisLeft(yScale).tickSize(-innerWidth);
    const yAxisGroup = g.append('g').call(yAxis);

    g.selectAll('.tick text').attr('font-size', '2em')

}

const render_update = function (seq) {
    //展示左上角省份
    const p = seq[0]['省份']
    g.selectAll('.date_text').remove();
    console.log(p)
    const provinces_text = g.append("text")
    .data(['seq'])
    .attr('class', "date_text")
    .attr('x', innerWidth/4+30)
    .attr('y', innerHeight/ 10-30)
    .attr("dy", ".5em")
    .style("text-anchor", "end")
    .attr("fill", "#504f4f")
    .attr('font-size', '6em')
    .attr('font-weight', 'bold')
    .text(p);

    

}


d3.csv('./province.csv', function (error, data) {
    if (error) throw error;
    data = data.filter(datum => { return datum['省份'] !== "总计" })
    data = data.filter(datum => { return datum['省份'] !== "湖北" })
    alldates = Array.from(new Set(data.map(d => xValue(d))));
    alldates.sort(function (a, b) {
        return a > b ? 1 : -1;
    });
    data.forEach(datum => {
        datum['现有确诊'] = +(datum['现有确诊']);
        datum['日期'] = new Date(datum['日期']);
    });
    allkeys = Array.from(new Set(data.map(d => d['省份'])));

    let provinces = {};
    allkeys.forEach(key => provinces[key] = []);
    data.forEach(d => provinces[d['省份']].push(d))
    allkeys.forEach(key => provinces[key] = provinces[key].sort((a,b) => {
        return b['日期'] - a['日期']
    }))
    console.log(provinces)
    render_init(data)
    let c = 0;
    let intervalId = setInterval(() => {
        if (c >= allkeys.length) {
            clearInterval(intervalId);
        } else {
            let key = allkeys[c];
            render_update(provinces[key]);
            c = c + 1;
        }
    }, 2000);
})