import React from "react";
import { MDBBtn } from "mdbreact";
export default class CustomButton extends React.Component {
  render() {
    return (
      <MDBBtn color="primary" {...this.props}>
        {this.props.children}
      </MDBBtn>
    );
  }
}
