import React from "react";
import { connect } from "react-redux";
import { unauthUser } from "../../Redux/actions/userActions";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";

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
        <MDBNavbar className="navbar navbar-expand-lg navbar-dark primary-color">
          {/* Brand */}
          <MDBNavbarBrand className="white-text">
            <MDBNavLink className="white-text" to="/dashboard">
              Dashboard
            </MDBNavLink>
          </MDBNavbarBrand>

          {/* Navbar Burger */}
          <MDBNavbarToggler
            onClick={e => {
              this.OpenNav(e, "NavBar");
            }}
          />
          {/* Navbar */}
          <MDBCollapse id="NavBar" isOpen={this.state.NavBar} navbar>
            {/* Navbar left links */}
            <MDBNavbarNav left>
              <MDBNavLink to="/users">Users</MDBNavLink>
            </MDBNavbarNav>

            {/* Navbar right links */}
            <MDBNavbarNav right>
              <MDBNavItem className="white-text mr-3">
                <MDBNavLink to="/profile">
                  <MDBIcon icon="user" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="white-text mr-3">
                <MDBNavLink to="/">
                  <MDBIcon icon="sign-out-alt" onClick={this.Logout} />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
