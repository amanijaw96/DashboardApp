import React from "react";
import CustomButton from "../CustomButton";
const { Bar } = require("react-chartjs-2");

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stacked: false
    };
  }
  // graph options
  renderOptions = () => {
    return {
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
            stacked: this.state.stacked,
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
            stacked: this.state.stacked,
            gridLines: {
              display: false
            }
          }
        ]
      }
    };
  };

  render() {
    return (
      <div className="card p-lg-5 p-md-4 p-2 h-100">
        <div className="row ml-2 mr-2 d-flex align-items-center justify-content-end">
          <CustomButton
            onClick={() =>
              this.setState({
                stacked: !this.state.stacked
              })
            }
            size="sm"
          >
            {this.state.stacked ? "laid" : "stacked"}
          </CustomButton>
        </div>
        <div className="h-100">
          <Bar
            options={this.renderOptions()}
            data={{
              labels: this.props.labels,
              datasets: this.props.datasets
            }}
          ></Bar>
        </div>
      </div>
    );
  }
}

export default BarChart;
