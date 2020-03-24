import React from "react";
import { height } from "@material-ui/system";

const Userinfo = [
  {
    key: "FirstName",
    name: "First Name"
  },
  {
    key: "LastName",
    name: "Last Name"
  },
  {
    key: "Age",
    name: "Age"
  },
  {
    key: "Nationality",
    name: "Nationality"
  },
  {
    key: "PhoneNumber",
    name: "Phone Number"
  },
  {
    key: "LastMonthBill",
    name: "Last Month Bill"
  },
  {
    key: "Subscribed_services",
    name: "# Subscribed Services"
  }
];

export default class UserDetails extends React.Component {
  render() {
    return this.props.Info !== undefined ? (
      <div style={{ minHeight: 400 }} className="w-100">
        <div className="row justify-content-center ">
          <i className="far fa-user-circle fa-8x indigo-text"></i>
        </div>
        <div className="row m-2">
          {Userinfo.map(element => {
            return this.props.Info[element.key] ? (
              <div className="col-12 d-flex pb-2 justify-content-md-between  justify-content-start mt-4 border-bottom border-light">
                <strong>{element.name + ":"}</strong>
                <span className="ml-md-0 ml-1">
                  {this.props.Info[element.key]}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>
    ) : null;
  }
}
