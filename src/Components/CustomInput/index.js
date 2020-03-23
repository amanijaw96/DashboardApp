import React from "react";

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="form-row mt-3">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          className={
            this.props.className
              ? "form-control" + this.props.className
              : "form-control"
          }
          {...this.props}
        />
        <div className="invalid-feedback">{this.props.invalidmsg}</div>
      </div>
    );
  }
}
export default CustomInput;
