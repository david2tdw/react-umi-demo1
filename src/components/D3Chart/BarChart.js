import React, { Component } from 'react'
import * as d3 from 'd3'
// import { select, tree, hierarchy, zoom, event } from "d3";

class BarChartComponent extends Component {
  componentDidMount() {
    this.drawChart()
  }
  drawChart() {
    const data = this.props.data
    const svg = d3.select('#' + this.props.id)
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height)
      .style('margin-left', 100)

    const h = this.props.height
    console.log(svg)
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d,i) => i * 70)
      .attr("y", (d,i) => h - (10 * d) - 3)
  }

  render() {
    return <div id={this.props.id}></div>
  }
}

export default BarChartComponent
