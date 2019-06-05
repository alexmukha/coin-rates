import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <div className="navbar-fixed bm-100">
        <nav className="z-depth-0 #212121 grey darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" title="Crypto-Arbitrage">Crypto-Arbitrage</Link>
      {/* <a href="/" className="brand-logo"></a> */}
      <ul id="nav-mobile" className="right hide-on-small-and-down">
        <li>
        <Link
                to="/login"
                style={{
                  // width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                // className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
        </li>
        <li>
        <Link
                to="/register"
                style={{
                  // width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                // className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
          </li>
          <li><a href="/" onClick={this.onLogoutClick}>Logout</a></li>
        
      </ul>
    </div>
        </nav>
      </div>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
