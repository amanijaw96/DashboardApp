import React from "react";
import BarChart from "../../Components/BarGraph";
import LineChart from "../../Components/Line";
import { BarChartData, LineChartData } from "../../assets/Constants";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row m-lg-5 m-3" style={{ height: 500 }}>
        <div className="col-xl-6 h-100">
          <BarChart
            title={"Messages"}
            labels={BarChartData.labels}
            datasets={BarChartData.datasets}
          ></BarChart>
        </div>
        <div className="col-xl-6 mt-md-3 mt-lg-0 mt-3 h-100">
          <LineChart
            title={"Calls"}
            labels={LineChartData.labels}
            datasets={LineChartData.datasets}
          ></LineChart>
        </div>
      </div>
    );
  }
}
export default Dashboard;
