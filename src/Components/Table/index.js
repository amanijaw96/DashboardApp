import React, { Component } from "react";
import MaterialTable from "material-table";
import { rgba } from "polished";

class CustomTable extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card w-100">
        <MaterialTable
          options={{
            headerStyle: {
              backgroundColor: rgba("#007bff", 0.6),
              color: "#FFF"
            }
          }}
          columns={this.props.columns}
          data={this.props.data}
          title={this.props.title}
          {...this.props}
        />
      </div>
    );
  }
}

export default CustomTable;
