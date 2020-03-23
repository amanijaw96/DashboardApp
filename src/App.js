import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Containers/Login";
import Dashboard from "./Containers/Dashboard";
import { connect } from "react-redux";

const AuthenticatedRoute = ({
  component: Component,
  loggedinstatus,
  verifiedphone,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loggedinstatus === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Router>
          <AuthenticatedRoute
            loggedinstatus={this.props.user.loggedin}
            path="/dashboard"
            component={Dashboard}
          />

          <Route exact path="/" component={Login} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
