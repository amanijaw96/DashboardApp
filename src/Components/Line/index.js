import React from "react";
import { MDBBtn } from "mdbreact";
const { Line } = require("react-chartjs-2");

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card p-lg-5 p-md-4 p-2 h-100">
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: this.props.title
            },
            legend: {
              position: "bottom"
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
          data={{
            labels: this.props.labels,
            datasets: this.props.datasets
          }}
        ></Line>
      </div>
    );
  }
}
