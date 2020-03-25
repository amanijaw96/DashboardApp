import React from "react";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { credentials } from "../../assets/Constants";
import "./Login.scss";
import { authUser } from "../../Redux/actions/userActions";
import { connect } from "react-redux";
import Alert from "../../Components/Alert";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => {
      dispatch(authUser());
    }
  };
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  // onForm Submit
  handleFormSubmit = e => {
    var isvalidate = document.getElementById("signIn-form").checkValidity();
    e.preventDefault();
    if (isvalidate) {
      this.handleSignin();
    }
    document.getElementById("signIn-form").classList.add("was-validated");
  };

  // Handle SignIn
  handleSignin = () => {
    let ref = this;
    if (
      ref.state.email === credentials.email &&
      ref.state.password === ref.state.password
    ) {
      ref.props.authUser();
      ref.props.history.push("/dashboard");
      Alert("success", "Signed in Successfully");
    } else {
      Alert("error", "Invalid credentials");
    }
  };

  render() {
    return (
      <div className="LoginBox mt-md-5 mt-3 border border-light">
        <form
          id="signIn-form"
          className="needs-validation text-center p-4"
          noValidate
        >
          <p className="h4 mt-2">Sign in</p>
          <CustomInput
            type="email"
            id="email"
            hint="Email"
            required
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
            outline
            value={this.state.email}
          ></CustomInput>

          <CustomInput
            type="text"
            id="password"
            hint="Password"
            type="password"
            required
            outline
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
            value={this.state.password}
          ></CustomInput>

          <div className="form-row mt-3 justify-content-center ">
            <CustomButton onClick={this.handleFormSubmit} type="submit">
              Sign in
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
