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
          {...this.props}
          options={{
            headerStyle: {
              backgroundColor: rgba("#007bff", 0.6),
              color: "#FFF"
            },
            ...this.props.options
          }}
        />
      </div>
    );
  }
}

export default CustomTable;
