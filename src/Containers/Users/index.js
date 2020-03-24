import React, { Component } from "react";
import CustomTable from "../../Components/Table";
import CustomButton from "../../Components/CustomButton";
import { connect } from "react-redux";
import { updateUserData } from "../../Redux/actions/userDataActions";
import Alert from "../../Components/Alert";
import CustomModal from "../../Components/Modal";

const mapDispatchToProps = dispatch => {
  return {
    updateUserData: data => {
      dispatch(updateUserData(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    UserData: state.UserData
  };
};

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      UserInfo: undefined
    };
  }

  // Component Did Mount
  componentDidMount() {
    let ref = this;
    this.setState({ data: ref.props.UserData.data });
  }
  // Add new Element
  AddNeweElement = (newData, resolve) => {
    setTimeout(() => {
      {
        this.setState({ data: [...this.state.data, newData] }, () => {
          resolve();
          this.props.updateUserData(this.state.data);
          Alert("success", "Added Successfully");
        });
      }
      resolve();
    }, 1000);
  };
  // Update An Element
  UpdateElement = (newData, oldData, resolve) => {
    setTimeout(() => {
      {
        let data = this.state.data;
        const index = data.indexOf(oldData);
        this.setState(
          {
            data: [
              ...this.state.data.slice(0, index),
              newData,
              ...this.state.data.slice(index + 1)
            ]
          },
          () => {
            resolve();
            Alert("success", "Successfully updated");
            this.props.updateUserData(this.state.data);
          }
        );
      }
      resolve();
    }, 1000);
  };
  // Delete An Element
  DeleteElement = (oldData, resolve) => {
    setTimeout(() => {
      {
        let data = this.state.data;
        const index = data.indexOf(oldData);
        this.setState(
          {
            data: [
              ...this.state.data.slice(0, index),
              ...this.state.data.slice(index + 1)
            ]
          },
          () => {
            resolve();
            Alert("success", "Successfully deleted");
            this.props.updateUserData(this.state.data);
          }
        );
      }
      resolve();
    }, 1000);
  };

  // Show User Details
  ShowDetails = rowdata => {
    let ref = this;
    ref.setState({ visible: !ref.state.visible, UserInfo: rowdata });
  };

  render() {
    // Columns
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
        title: "Last Month Billss",
        field: "LastMonthBill",
        type: "numeric",
        hidden: true
      },
      {
        render: rowData => (
          <CustomButton onClick={() => this.ShowDetails(rowData)}>
            {"view Details"}
          </CustomButton>
        )
      }
    ];

    return (
      <div className="row m-lg-5 m-3">
        <CustomModal
          title={"User Details"}
          visible={this.state.visible}
          toggle={() => this.ShowDetails(undefined)}
          cancelText="Close"
        >
          <div>hi</div>
        </CustomModal>

        <CustomTable
          options={{
            search: false
          }}
          columns={Columns}
          data={this.state.data}
          title="Users"
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) =>
                this.AddNeweElement(newData, resolve)
              ),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) =>
                this.UpdateElement(newData, oldData, resolve)
              ),
            onRowDelete: oldData =>
              new Promise((resolve, reject) =>
                this.DeleteElement(oldData, resolve)
              )
          }}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
