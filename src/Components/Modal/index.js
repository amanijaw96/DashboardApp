import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import CustomButton from "../CustomButton";

export default class CustomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <MDBModal isOpen={this.props.visible} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>
            {this.props.title}
          </MDBModalHeader>
          <MDBModalBody>{this.props.children}</MDBModalBody>
          {this.props.footer !== undefined && this.props.footer !== false ? (
            <MDBModalFooter>{this.props.footer}</MDBModalFooter>
          ) : this.props.footer === false ? null : (
            <MDBModalFooter>
              <CustomButton color="secondary" onClick={this.props.toggle}>
                {this.props.cancelText}
              </CustomButton>
              {this.props.okayText ? (
                <CustomButton>{this.props.okayText}</CustomButton>
              ) : null}
            </MDBModalFooter>
          )}
        </MDBModal>
      </>
    );
  }
}
