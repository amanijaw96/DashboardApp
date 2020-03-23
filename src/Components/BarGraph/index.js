import React from "react";
import { MDBBtn } from "mdbreact";

const { Bar } = require("react-chartjs-2");

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stacked: false
    };
  }

  render() {
    return (
      <div className="card p-lg-5 p-md-4 p-2 h-100">
        <div className="row ml-2 mr-2 d-flex align-items-center justify-content-end">
          <MDBBtn
            onClick={() =>
              this.setState({
                stacked: !this.state.stacked
              })
            }
            color="primary"
            rounded
            size="sm"
          >
            {this.state.stacked ? "laid" : "stacked"}
          </MDBBtn>
        </div>
        <div className="h-100">
          <Bar
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
            }}
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
