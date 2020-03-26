import React from "react";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import CustomButton from "../CustomButton";

export default class CustomModal extends React.Component {
  render() {
    return (
      <>
        <MDBModal isOpen={this.props.visible} toggle={this.props.toggle}>
          {/* Modal Header Section */}
          <MDBModalHeader toggle={this.props.toggle}>
            {this.props.title}
          </MDBModalHeader>
          {/* Modal Body Section */}
          <MDBModalBody>{this.props.children}</MDBModalBody>
          {/* Modal Footer Section */}
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
