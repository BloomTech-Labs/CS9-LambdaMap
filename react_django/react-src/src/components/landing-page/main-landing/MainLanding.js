// Main landing page for signing in and registering, will redirect to landing page of respective account

import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../actions";
import logo from "./lambdamainlogo.PNG";
import "./MainLanding.css";

class MainLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedin: false
    };
  }

  checkAuth = () => {
    let jwt = sessionStorage.getItem("jwt");
    if (jwt.length > 0) {
      this.setState({ loggedin: true });
    }
  };

  render() {
    let redirecting = null;
    if (this.state.loggedin) {
      if (this.props.clients.user !== undefined) {
        if (this.props.clients.user.account_type === false) {
          redirecting = <Redirect to="/jslanding/" />;
        }
      } else {
        if (this.props.hirePartner.user.account_type) {
          redirecting = <Redirect to="/hplanding/" />;
        }
      }
    }

    return (
      <div className="main">
        <div className="signin">
          <div>
            <div className="signin-form input-effect">
              <input
                className="emailInput"
                type="text"
                placeholder=""
                name="email"
                value={this.state.email}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <label>E-mail</label>
              <span className="focus-border" />
            </div>
          </div>
          <div>
            <div className="signpwd-form input-effect">
              <input
                className="pwdInput"
                type="password"
                placeholder=""
                name="password"
                className="input"
                value={this.state.password}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <label>Password</label>
              <span className="focus-border" />
            </div>
          </div>
          <button
            onClick={() => {
              this.props.login({
                email: this.state.email,
                password: this.state.password
              });
              setTimeout(() => {
                this.checkAuth();
              }, 2000);
              this.setState({ email: "", password: "" });
            }}
          >
            Sign In
          </button>
        </div>

        {redirecting}
        <div className="signup">
          <h5>Not a member?</h5>
          <Link to="/signup/">
            <button>Sign Up</button>
          </Link>
        </div>
        <div>
          <img src={logo} className="HP" alt="Hire Partner" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    hirePartner: state.hirePartner,
    hiring_partner: state.hiring_partner
  };
};

export default connect(
  mapStateToProps,
  { login }
)(MainLanding);
