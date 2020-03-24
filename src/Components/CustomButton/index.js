import React from "react";
import { MDBBtn } from "mdbreact";
export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MDBBtn color="primary" {...this.props}>
        {this.props.children}
      </MDBBtn>
    );
  }
}
