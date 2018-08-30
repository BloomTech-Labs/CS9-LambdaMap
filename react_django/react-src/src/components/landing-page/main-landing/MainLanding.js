// Main landing page for signing in and registering, will redirect to landing page of respective account

import React, { Component } from "react";
import { Redirect } from "react-router";
import { login } from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
          redirecting = <Redirect to="/jobseekers/" />;
        }
      } else {
        if (this.props.hirePartner.user.account_type) {
          console.log(this.props.hirePartner);
          redirecting = <Redirect to="/map/" />;
        }
      }
    }

    return (
      <div className="main">
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          className="input"
          value={this.state.email}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />

        <input
          type="text"
          placeholder="Name"
          name="password"
          className="input"
          value={this.state.password}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />

        <button
          onClick={() => {
            this.props.login({
              email: this.state.email,
              password: this.state.password
            });
            setTimeout(() => {
              this.checkAuth();
            }, 3000);
            this.setState({ email: "", password: "" });
          }}
        >
          Punch it
        </button>
        {redirecting}

        <Link to="/signup/">
          <button>Sign Up</button>
        </Link>
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
