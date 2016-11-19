/**
 * Created by Brian on 11/19/2016.
 */

function displayPieGraph(data, target, size) {

    var width = size;
    var height = size;
    var radialLength = size / 8;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal(d3.schemeCategory20b);

    var elementName = '#'.concat(target);

    var svg = d3.select(elementName)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    var arc = d3.arc()
        .innerRadius(radius - radialLength)
        .outerRadius(radius);

    var pie = d3.pie()
        .startAngle(-90 * Math.PI / 180)
        .endAngle(-90 * Math.PI / 180 + 2 * Math.PI)
        .value(function (d) {
            return d.number;
        })
        .padAngle(0.01)
        .sort(null);

    var path = svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('id', function (d, i) {
            return "arc_" + i
        }) //unique id
        .attr('d', arc)
        .attr('fill', function (d, i) {
            return color(d.data.label);
        });

    //Append the month names within the arcs
    svg.selectAll("keyText")
        .data(data)
        .enter().append("text")
        .attr("x", 5)   //Move the text from the start angle of the arc
        .attr("dy", 18) //Move the text down
        .attr("dx", function (d, i) {
            return
        })
        .append("textPath")
        .attr("xlink:href", function (d, i) {
            return "#arc_" + i;
        })
        .text(function (d) {
            return d.label;
        })
        .style('fill', 'white');
}
