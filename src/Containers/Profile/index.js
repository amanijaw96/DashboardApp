import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { connect } from "react-redux";
import "./profile-style.scss";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { UpdateProfile } from "../../Redux/actions/userActions";
import Alert from "../../Components/Alert";

const UserValues = {
  Name: "Name",
  userName: "User Name",
  Role: "Role",
  phone: "Phone"
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    UpdateProfile: (Name, userName, Role, phone) => {
      dispatch(UpdateProfile(Name, userName, Role, phone));
    }
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  // On Component Mount
  componentDidMount() {
    let ref = this;
    ref.setState({ user: ref.props.user });
  }

  // on Input Change
  elementChange = (e, element) => {
    let ref = this;
    this.setState({
      user: {
        ...ref.state.user,
        [element]: e.target.value
      }
    });
  };

  // save data
  Save = () => {
    let valid = document.getElementById("Profile-form").checkValidity();
    if (valid) {
      let ref = this;
      ref.props.UpdateProfile(
        ref.state.user.Name,
        ref.state.user.userName,
        ref.state.user.Role,
        ref.state.user.phone
      );
      ref.setState({ edit: false }, () => {
        Alert("success", "Successfully edited");
      });
    } else {
      document.getElementById("Profile-form").classList.add("was-validated");
    }
  };

  // handleClose
  handleClose = () => {
    let ref = this;
    ref.setState({ user: ref.props.user });
  };

  render() {
    return this.state.user ? (
      <MDBContainer
        className="card mt-3"
        style={{ minHeight: 650, maxWidth: 550 }}
      >
        {/* header Section */}
        <MDBRow>
          <MDBCol
            md={12}
            className={"d-flex justify-content-center"}
            style={{ backgroundColor: "#4285f4" }}
          >
            <div style={{ height: 150 }}></div>
          </MDBCol>
          <MDBCol className={"d-flex justify-content-center"}>
            <img
              style={{
                borderRadius: "50%",
                width: 160,
                height: 160,
                position: "absolute",
                top: -80
              }}
              src="https://kvinfo.dk/wp-content/uploads/2013/01/amalal-malki-2.jpg"
              alt=""
            />
          </MDBCol>
        </MDBRow>

        {/* User Info Section */}
        <MDBRow className="mr-2 ml-2" style={{ marginTop: 90 }}>
          <MDBCol
            lg={12}
            className="d-flex justify-content-end"
            style={{ cursor: "pointer" }}
          >
            <MDBIcon
              icon={this.state.edit ? "times" : "edit"}
              onClick={() => {
                this.setState({ edit: !this.state.edit });
                this.handleClose();
              }}
            />
          </MDBCol>
          <form
            id="Profile-form"
            className="needs-validation d-flex flex-row flex-wrap"
            noValidate
          >
            {Object.keys(UserValues)
              .filter(val => val !== "Role")
              .map(element => {
                return (
                  <MDBCol lg={6}>
                    <CustomInput
                      type="text"
                      id={element}
                      hint={UserValues[element]}
                      required
                      label={UserValues[element]}
                      outline={this.state.edit}
                      disabled={!this.state.edit}
                      value={this.state.user[element]}
                      onChange={e => {
                        this.elementChange(e, element);
                      }}
                    ></CustomInput>
                  </MDBCol>
                );
              })}

            {/* Role Button Section */}
            <MDBCol lg={6}>
              {this.state.edit === false ? (
                <CustomInput
                  type="text"
                  id={"Role"}
                  required
                  label={"Role"}
                  disabled={true}
                  value={this.state.user.Role}
                ></CustomInput>
              ) : (
                <div className="md-form">
                  <select
                    className="select w-100"
                    value={this.state.user.Role}
                    id="Role"
                    onChange={e => {
                      this.elementChange(e, "Role");
                    }}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
              )}
            </MDBCol>
          </form>
        </MDBRow>
        {/* Save Button Section */}
        {this.state.edit ? (
          <MDBRow>
            <MDBCol
              lg={12}
              className="d-flex justify-content-center"
              style={{ cursor: "pointer" }}
            >
              <CustomButton size="sm" onClick={this.Save}>
                Save
              </CustomButton>
            </MDBCol>
          </MDBRow>
        ) : null}
      </MDBContainer>
    ) : null;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
