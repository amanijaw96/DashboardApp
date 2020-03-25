import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { connect } from "react-redux";
import "./profile-style.scss";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";

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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  componentDidMount() {
    let ref = this;
    ref.setState({ user: ref.props.user });
  }

  render() {
    return this.state.user ? (
      <MDBContainer
        className="card mt-3"
        style={{ minHeight: 650, maxWidth: 550 }}
      >
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
        <MDBRow className="mr-2 ml-2" style={{ marginTop: 90 }}>
          <MDBCol
            lg={12}
            className="d-flex justify-content-end"
            style={{ cursor: "pointer" }}
          >
            <MDBIcon
              icon={this.state.edit ? "times" : "edit"}
              onClick={() => this.setState({ edit: !this.state.edit })}
            />
          </MDBCol>
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
                  ></CustomInput>
                </MDBCol>
              );
            })}

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
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
            )}
          </MDBCol>
        </MDBRow>

        {this.state.edit ? (
          <MDBRow>
            <MDBCol
              lg={12}
              className="d-flex justify-content-center"
              style={{ cursor: "pointer" }}
            >
              <CustomButton
                // onClick={

                // }
                size="sm"
              >
                Save
              </CustomButton>
            </MDBCol>
          </MDBRow>
        ) : null}
      </MDBContainer>
    ) : null;
  }
}

export default connect(mapStateToProps)(Profile);
