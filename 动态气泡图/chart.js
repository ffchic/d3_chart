
// get main SVG and its attributes & setting hyper-parameters; 
const svg = d3.select('#mainsvg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const margin = { top: 100, right: 120, bottom: 100, left: 120 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const xValue = d => { return Math.log(d['确诊人数'] + 1) };
const yValue = d => { return Math.log(d['新增确诊'] + 1) };
const rValue = d => { return Math.sqrt(d['感染率'] * 500) * 0.8 };
const keyHint = '地区';
let xScale, yScale;
let maxX, maxY;
let dates;
let aduration = 1000;
let metapop;

const xAxisLabel = '累计确诊人数（对数）';
const yAxisLabel = '新增人数（对数）';

var color = {
    "武汉": "#ff1c12",
    "黄石": "#de5991",
    "十堰": "#759AA0",
    "荆州": "#E69D87",
    "宜昌": "#be3259",
    "襄阳": "#EA7E53",
    "鄂州": "#EEDD78",
    "荆门": "#9359b1",
    "孝感": "#47c0d4",
    "黄冈": "#F49F42",
    "咸宁": "#AA312C",
    "恩施州": "#B35E45",
    "随州": "#4B8E6F",
    "仙桃": "#ff8603",
    "天门": "#ffde1d",
    "潜江": "#1e9d95",
    "神农架": "#7289AB"
}

const renderinit = function (data, seq) {
    // Linear Scale: Data Space -> Screen Space; 
    xScale = d3.scaleLinear()
        .domain(d3.extent(data, xValue)) // "extent" is equivalent to [d3.min(data, xValue), d3.max(data, xValue)]; 
        .range([0, innerWidth])
        .nice();

    // Introducing y-Scale; 
    yScale = d3.scaleLinear()
        .domain(d3.extent(data, yValue).reverse()) // remember to use reverse() to make y-axis start from the bottom; 
        .range([0, innerHeight])
        .nice();

    // generate maxX and maxY; 
    maxX = xScale(d3.max(data, xValue));
    maxY = yScale(d3.max(data, yValue));

    // The reason of using group is that nothing is rendered outside svg, so margin of svg is always blank while margin of group is rendered inside svg; 
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('id', 'maingroup');

    // Adding axes; 
    const yAxis = d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        //.tickFormat(d3.format('.2s'))
        .tickPadding(10); // .tickPadding is used to prevend intersection of ticks; 
    const xAxis = d3.axisBottom(xScale)
        //.tickFormat(d3.format('.2s'))
        .tickSize(-innerHeight)
        .tickPadding(10);

    let yAxisGroup = g.append('g').call(yAxis)
        .attr('id', 'yaxis');
    yAxisGroup.append('text')
        .attr('font-size', '2em')
        .attr('transform', `rotate(-90)`)
        .attr('x', -innerHeight / 2)
        .attr('y', -60)
        .attr('fill', '#333333')
        .text(yAxisLabel)
        .attr('text-anchor', 'middle') // Make label at the middle of axis. 
    yAxisGroup.selectAll('.domain').remove(); // we can select multiple tags using comma to seperate them and we can use space to signify nesting; 

    let xAxisGroup = g.append('g').call(xAxis)
        .attr('transform', `translate(${0}, ${innerHeight})`)
        .attr('id', 'xaxis');
    xAxisGroup.append('text')
        .attr('font-size', '2em')
        .attr('y', 60)
        .attr('x', innerWidth / 2)
        .attr('fill', '#333333')
        .text(xAxisLabel);
    xAxisGroup.selectAll('.domain').remove();

    var legend_color = [
        "#ff1c12",
        "#de5991",
        "#759AA0",
        "#E69D87",
        "#be3259",
        "#EA7E53",
        "#EEDD78",
        "#9359b1",
        "#47c0d4",
        "#F49F42",
        "#AA312C",
        "#B35E45",
        "#4B8E6F",
        "#ff8603",
        "#ffde1d",
        "#1e9d95",
        "#7289AB"
    ]

    var legend_name = ["武汉市",
        "黄石市",
        "十堰市",
        "荆州市",
        "宜昌市",
        "襄阳市",
        "鄂州市",
        "荆门市",
        "孝感市",
        "黄冈市",
        "咸宁市",
        "恩施州",
        "随州市",
        "仙桃市",
        "天门市",
        "潜江市",
        "神农架",
    ];

    // draw legend
    var legend = d3.select('#maingroup').selectAll(".legend")
        .data(legend_name)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) { return "translate(" + (innerWidth + 10) + "," + (i * 25 + 300) + ")"; });

    // draw legend colored rectangles
    legend.append("rect")
        .data(legend_name)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 30)
        .attr("height", 20)
        .style("fill", function (d, i) {
            return legend_color[i];
        });

    // draw legend text
    legend.append("text")
        .data(legend_name)
        .attr('class', 'legend_text')
        .attr("x", 40)
        .attr("y", 9)
        .attr("dy", ".5em")
        .style("text-anchor", "start")
        .text(function (d, i) { return legend_name[i]; });
};

const renderupdate = function (seq) {
    const g = d3.select('#maingroup');
    time = seq[0]['日期'];
    g.selectAll('.date_text').remove();
    g.append("text")
        .data(['seq'])
        .attr('class', 'date_text')
        .attr("x", innerWidth / 4 + 30)
        .attr("y", innerHeight / 10 - 20)
        .attr("dy", ".5em")
        .style("text-anchor", "end")
        .attr("fill", "#504f4f")
        .attr('font-size', '6em')
        .attr('font-weight', 'bold')
        .text(time);

    circleupdates = g.selectAll('circle').data(seq, d => d[keyHint]);
    circleenter = circleupdates.enter().append('circle')
        .attr('cy', (datum) => { return yScale(yValue(datum)) })
        .attr('cx', (datum) => { return xScale(xValue(datum)) }) // use xSacle to re-scale data space (domain) and return the rescaled population; 
        .attr('r', datum => rValue(datum))
        .attr('fill', function (d, i) { return color[d[keyHint]] })
        .attr('opacity', .8);
    circleupdates.merge(circleenter).transition().ease(d3.easeLinear).duration(aduration)
        .attr('cy', (datum) => { return yScale(yValue(datum)) })
        .attr('cx', (datum) => { return xScale(xValue(datum)) }) // use xSacle to re-scale data space (domain) and return the rescaled population; 
        .attr('r', datum => rValue(datum));

    textupdates = g.selectAll('.province_text').data(seq);
    textenter = textupdates.enter().append('text')
        .attr("class", "province_text")
        .attr("x", (datum) => { return xScale(xValue(datum)); })
        .attr("y", (datum) => { return yScale(yValue(datum)); })
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .attr("fill", "#333333")
        //.attr('opacity', 0)
        .text(function (d, i) {
            return d[keyHint];
        });

    textupdates.merge(textenter).transition().ease(d3.easeLinear).duration(aduration)
        .attr('x', (datum) => {
            return xScale(xValue(datum));
        })
        .attr('y', (datum) => { return yScale(yValue(datum)); });
};

d3.csv('./hubeipop.csv', function(error, data) {
    data.forEach(datum => {
        datum['人口（万人）'] = +(datum['人口（万人）']);
    })
    metapop = data;
});

d3.csv('./hubei_day14.csv', function(error, data) {
    data = data.filter(datum => { return datum[keyHint] !== '总计' });
    data.forEach(datum => {
        // pre-process the data; 
        datum['确诊人数'] = +(datum['确诊人数']);
        datum['治愈人数'] = +(datum['治愈人数']);
        datum['死亡人数'] = +(datum['死亡人数']);
        datum['新增确诊'] = +(datum['新增确诊']);
        if (datum['新增确诊'] < 0) {
            datum['新增确诊'] = 0;
        }
        datum['感染率'] = datum['确诊人数'] /
            (metapop.find(x => x[keyHint] === datum[keyHint])['人口（万人）']);
    });

    // remove duplicated items; 
    alldates = Array.from(new Set(data.map(datum => datum['日期'])));

    // make sure dates are listed according to real time order; 
    alldates = alldates.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    dates = alldates;

    // re-arrange the data sequentially; 
    sequential = [];
    alldates.forEach(datum => {
        sequential.push([]);
    });
    data.forEach(datum => {
        sequential[alldates.indexOf(datum['日期'])].push(datum);
    });

    renderinit(data, sequential[0]);

    // set the animation interval; 
    let c = 0;
    intervalId = setInterval(function () {
        if (c >= alldates.length) {
            console.log('time to close this animation');
            clearInterval(intervalId);
        } else {
            renderupdate(sequential[c]);
            c = c + 1;
        }
    }, aduration);
});
