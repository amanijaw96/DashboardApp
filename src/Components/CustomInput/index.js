import React from "react";
import { MDBInput } from "mdbreact";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MDBInput
        label={this.props.label}
        className={
          this.props.className
            ? "form-control" + this.props.className
            : "form-control"
        }
        {...this.props}
      />
    );
  }
}
export default CustomInput;
