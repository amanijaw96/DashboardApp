import React from "react";
import { connect } from "react-redux";
import { unauthUser } from "../../Redux/actions/userActions";

const mapDispatchToProps = dispatch => {
  return {
    unauthUser: () => {
      dispatch(unauthUser());
    }
  };
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBar: false,
      profileData: false
    };
  }

  // open Navbar
  OpenNav = (e, id) => {
    let ref = this;
    if (ref.state[id]) {
      document.getElementById(id).classList.remove("show");
      ref.setState({ [id]: false });
    } else {
      document.getElementById(id).classList.add("show");
      ref.setState({ [id]: true });
    }
  };

  // Logout
  Logout = () => {
    let ref = this;
    ref.props.unauthUser();
  };
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          {/* Brand */}
          <a className="navbar-brand" href="/dashboard">
            Dashboard
          </a>

          {/* Navbar Burger */}
          <button
            className="navbar-toggler"
            onClick={e => {
              this.OpenNav(e, "NavBar");
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar */}
          <div className={"collapse navbar-collapse"} id="NavBar">
            {/* Navbar left links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/users">
                  Users
                </a>
              </li>
            </ul>

            {/* Navbar right links */}
            <ul className="navbar-nav ml-auto dropdown">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  <i class="fas fa-user-alt"></i>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  <i className="fas fa-sign-out-alt" onClick={this.Logout}></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
