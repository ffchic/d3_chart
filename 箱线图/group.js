var dataset = [
    {'Group': 1, 'y': 9.6084, 'x': '2016-02-24'}, {'Group': 2, 'y': 8.3853, 'x': '2016-02-24'}, {'Group': 3, 'y': 10.7726, 'x': '2016-02-24'}, {'Group': 4, 'y': 9.5266, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.4319, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.4748, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.7221, 'x': '2016-02-24'}, {'Group': 4, 'y': 8.8455, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.3541, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.8752, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.0971, 'x': '2016-02-24'}, {'Group': 4, 'y': 9.529, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.9258, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.5554, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.3797, 'x': '2016-02-24'}, {'Group': 4, 'y': 10.3007, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.7308, 'x': '2016-02-24'}, {'Group': 2, 'y': 10.145, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.5229, 'x': '2016-02-24'}, {'Group': 4, 'y': 10.1933, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 10.4703, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.0993, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.2828, 'x': '2016-02-24'}, {'Group': 4, 'y': 8.8896, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.6712, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.6066, 'x': '2016-02-24'}, {'Group': 3, 'y': 9.7683, 'x': '2016-02-24'}, {'Group': 4, 'y': 8.7936, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.796, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.235, 'x': '2016-02-24'}, {'Group': 3, 'y': 10.1127, 'x': '2016-02-24'}, {'Group': 4, 'y': 9.6313, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 9.8978, 'x': '2016-02-24'}, {'Group': 2, 'y': 9.8832, 'x': '2016-02-24'}, {'Group': 3, 'y': 10.077, 'x': '2016-02-24'}, {'Group': 4, 'y': 8.9407, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 10.6203, 'x': '2016-02-24'}, {'Group': 2, 'y': 8.9855, 'x': '2016-02-24'}, {'Group': 3, 'y': 8.8092, 'x': '2016-02-24'}, {'Group': 4, 'y': 9.2086, 'x': '2016-02-24'}, 
    {'Group': 1, 'y': 10.0291, 'x': '2016-02-24'}, {'Group': 2, 'y': 10.6046, 'x': '2016-02-24'}, {'Group': 3, 'y': 8.93, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.5811, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.1887, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.7812, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.4592, 'x': '2016-02-25'}, {'Group': 4, 'y': 8.8985, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 8.8945, 'x': '2016-02-25'}, {'Group': 2, 'y': 8.9336, 'x': '2016-02-25'}, {'Group': 3, 'y': 10.5869, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.3454, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.6008, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.2941, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.7605, 'x': '2016-02-25'}, {'Group': 4, 'y': 10.8079, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.6235, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.1671, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.1459, 'x': '2016-02-25'}, {'Group': 4, 'y': 10.053, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.8851, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.8126, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.1277, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.4574, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.9153, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.3335, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.8309, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.5283, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.3278, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.2429, 'x': '2016-02-25'}, {'Group': 3, 'y': 8.8882, 'x': '2016-02-25'}, {'Group': 4, 'y': 10.1804, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.5702, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.7751, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.4105, 'x': '2016-02-25'}, {'Group': 4, 'y': 11.2282, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 10.2564, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.4654, 'x': '2016-02-25'}, {'Group': 3, 'y': 11.6338, 'x': '2016-02-25'}, {'Group': 4, 'y': 10.6835, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 11.0882, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.0214, 'x': '2016-02-25'}, {'Group': 3, 'y': 11.3612, 'x': '2016-02-25'}, {'Group': 4, 'y': 8.8941, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.3877, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.4906, 'x': '2016-02-25'}, {'Group': 3, 'y': 8.9904, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.7924, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.8169, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.2744, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.5026, 'x': '2016-02-25'}, {'Group': 4, 'y': 10.2441, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.6869, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.5423, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.6033, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.3574, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.3936, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.1496, 'x': '2016-02-25'}, {'Group': 3, 'y': 10.1301, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.5242, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.0172, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.2004, 'x': '2016-02-25'}, {'Group': 3, 'y': 11.1183, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.4006, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.3979, 'x': '2016-02-25'}, {'Group': 2, 'y': 10.1518, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.9497, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.4862, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 11.0661, 'x': '2016-02-25'}, {'Group': 2, 'y': 8.7973, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.1521, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.2269, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.3122, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.3887, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.4404, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.303, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.5141, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.1575, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.1318, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.5884, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.328, 'x': '2016-02-25'}, {'Group': 2, 'y': 9.4545, 'x': '2016-02-25'}, {'Group': 3, 'y': 9.3155, 'x': '2016-02-25'}, {'Group': 4, 'y': 9.7818, 'x': '2016-02-25'}, 
    {'Group': 1, 'y': 9.6201, 'x': '2016-02-25'}];
     
      var labels2 = true; 
      var color = d3.scale.ordinal()
          .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
          
      var margin = {top: 30, right: 50, bottom: 70, left: 50};
      var width = 800 - margin.left - margin.right;
      var height = 400 - margin.top - margin.bottom;
          
      var min = Infinity,
          max = -Infinity;
          
      var x0 = d3.scale.ordinal()
          .rangeRoundBands([0, width], .5);
      
      var x_1 = d3.scale.ordinal();
      
      var y_0 = d3.scale.linear()
          .range([height + margin.top, 0]);
      
      var xAxis1 = d3.svg.axis()
          .scale(x0)
          .orient("bottom");
      
      var yAxis1 = d3.svg.axis()
          .scale(y_0)
          .orient("left");
          //.tickFormat(d3.format(".2s"));
          
      var svg1 = d3.select("body").append("svg")
          .attr("class", "box")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
      var Groups = d3.map(dataset, function(d){return d.Group;}).keys();
      var Dates = d3.map(dataset, function(d){return d.x;}).keys();
      
      var dataset2 = [];
      var tmp = [];
      Dates.forEach(function(date) {
        data_tmp = []
        Groups.forEach(function(group) {
          tmp = [];
          dataset.forEach(function(d) {
            if(d.x == date && d.Group == group){
              tmp.push(d.y);
            }; 
          });
          // console.log("**********")
          data_tmp.push({group: group, value: tmp});
        });
        dataset2.push({Date: date, Data: data_tmp});
      });
      
      min = d3.min(dataset, function(d){ return d.y }) * 0.995;
      max = d3.max(dataset, function(d){ return d.y }) * 1.005;
      
      x0.domain(dataset.map(function(d) { return d.x; }));
      x_1.domain(Groups).rangeRoundBands([0, x0.rangeBand()]);
      y_0.domain([min, max]);
      
      svg1.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + (height + margin.top) + ")")
          .call(xAxis1);
    
      svg1.append("g")
          .attr("class", "y axis")
          .call(yAxis1)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Population");
    
      var boxplot = d3.box2()
            .whiskers(iqr(1.5))
            .width(x_1.rangeBand())
            .height(height + margin.top)	
            .domain([min, max])
            .showLabels(labels2);
      
      var state = svg1.selectAll(".state2")
          .data(dataset2)
        .enter().append("g")
          .attr("class", "state")
          .attr("transform", function(d) { return "translate(" +  x0(d.Date)  + ",0)"; } );
        
      state.selectAll(".box")
          .data(function(d) { return d.Data; })
          .enter().append("g")
            .attr("transform", function(d) { return "translate(" +  x_1(d.group)  + ",0)"; } )
          .call(boxplot); 
    
    // Returns a function to compute the interquartile range.
    function iqr(k) {
      return function(d, i) {
        var q1 = d.quartiles[0],
            q3 = d.quartiles[2],
            iqr = (q3 - q1) * k,
            i = -1,
            j = d.length;
        while (d[++i] < q1 - iqr);
        while (d[--j] > q3 + iqr);
        return [i, j];
      };
    }