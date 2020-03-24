import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Login from "./Containers/Login";
import Dashboard from "./Containers/Dashboard";
import { connect } from "react-redux";
import Navbar from "./Components/Navbar";
import Users from "./Containers/Users";

// layout
const DefaultLayout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
);

// Restricted Routes
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
        <DefaultLayout>
          <Component {...props} {...rest} />
        </DefaultLayout>
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
          <AuthenticatedRoute
            loggedinstatus={this.props.user.loggedin}
            path="/users"
            component={Users}
          ></AuthenticatedRoute>
          <Route exact path="/" component={Login} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
