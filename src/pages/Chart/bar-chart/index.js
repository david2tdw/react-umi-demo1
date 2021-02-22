import React, {Component} from 'react'
import BarChartComponent from '@/components/D3Chart/BarChart'
import { BarcodeOutlined } from '@ant-design/icons';


class BarChart extends Component {
  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 'd3-barchart',
  };
  render () {
    return (
      <>
        <div>123123</div>
        <div className="App">
          <BarChartComponent
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            id={this.state.id}
          ></BarChartComponent>
        </div>
      </>
    );
  }
}

export default BarChart
