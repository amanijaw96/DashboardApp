import React, { Component } from "react";
import CustomTable from "../../Components/Table";
import CustomButton from "../../Components/CustomButton";
import { connect } from "react-redux";

const Columns = [
  { title: "First Name", field: "FirstName" },
  { title: "Last Name", field: "LastName" },
  { title: "Nationality", field: "Nationality" },
  {
    title: "Phone Number",
    field: "PhoneNumber"
  },
  {
    title: "Last Month Bill",
    field: "LastMonthBill",
    type: "numeric"
  },
  {
    title: "Action",
    render: rowData => <CustomButton>hi</CustomButton>
  }
];

const mapStateToProps = state => {
  return {
    UserData: state.UserData
  };
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // Component Did Mount
  componentDidMount() {
    let ref = this;
    this.setState({ data: ref.props.UserData.data });
  }

  render() {
    return (
      <div className="row m-lg-5 m-3">
        <CustomTable
          columns={Columns}
          data={this.state.data}
          title="Users"
          editable={
            {
              // onRowAdd: newData =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       {
              //         const data = this.state.data;
              //         data.push(newData);
              //         this.setState({ data }, () => resolve());
              //       }
              //       resolve();
              //     }, 1000);
              //   }),
              // onRowUpdate: (newData, oldData) =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       {
              //         const data = this.state.data;
              //         const index = data.indexOf(oldData);
              //         data[index] = newData;
              //         this.setState({ data }, () => resolve());
              //       }
              //       resolve();
              //     }, 1000);
              //   }),
              // onRowDelete: oldData =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       {
              //         let data = this.state.data;
              //         const index = data.indexOf(oldData);
              //         data.splice(index, 1);
              //         this.setState({ data }, () => resolve());
              //       }
              //       resolve();
              //     }, 1000);
              //   })
            }
          }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Users);
