// Main landing page for signing in and registering, will redirect to landing page of respective account

import React, { Component } from "react";
import HPnav from "../nav/company/HPnav";
import { login } from "../../actions";
import { connect } from "react-redux";

class MainLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="main">
        <HPnav />

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
            this.setState({ 
              email: "", 
              password: "" });
          }}
        >
          Punch it
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    client: state.client,
    loginClient: state.loginClient,
    error: state.error
  };
};

export default connect( mapStateToProps, { login })(MainLanding);