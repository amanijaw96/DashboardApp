import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavBar: false,
      profileData: false
    };
  }

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
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <li
                  className="nav-item"
                  onClick={e => {
                    this.OpenNav(e, "profileData");
                  }}
                >
                  <a className="nav-link" href="#">
                    <i className="fas fa-user"></i>
                  </a>
                </li>
                <div
                  id="profileData"
                  className="dropdown-menu dropdown-menu-right dropdown-default"
                >
                  <a className="dropdown-item" href="#">
                    view profile
                  </a>
                  <a className="dropdown-item" href="#">
                    logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
