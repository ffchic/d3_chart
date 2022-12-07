const svg = d3.select('#mainsvg')
const width = +svg.attr('width')
const height = +svg.attr('height')
const margin = { top: 120, right: 50, left: 120, bottom: 50 }
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const g = svg.append("g").attr('id', "maingroup")
    .attr('transform', `translate(${margin.left}, ${margin.top})`)

const projection = d3.geoNaturalEarth1();
const geo = d3.geoPath().projection(projection);

const tip = d3.tip()
.attr('class','d3-tip').html(d => d.properties.name);
svg.call(tip);

d3.json('./countries-110m.json').then(
    function(data){
        // convert topo-json to geo-json; 
        worldmeta = topojson.feature(data, data.objects.countries);
        console.log(worldmeta)
        projection.fitSize([innerWidth,innerHeight],worldmeta)
        g.selectAll('path').data(worldmeta.features).join('path')
        .attr("d",geo)
        .attr('stroke', "black")
        .attr("stroke-width", 1)
        .on('mouseover', function(){
            d3.select(this)
            .attr('opacity', 0.5)
            .attr('stroke', 'white')
            .attr('stroke-width',2)
        })
        .on('mouseout', function(){
            d3.select(this)
            .attr('opacity', 1)
            .attr('stroke', "black")
            .attr("stroke-width", 1)
        })
        .on('click', function(d){
            tip.show(d)
        })
    }
)

