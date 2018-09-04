// Register Page

import React, { Component } from "react";
import { register } from "../../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      account_type: false,
      first_name: "",
      last_name: "",
      company_name: "",
      city: "",
      state: ""
    };
  }

  render() {
    let employer = "";
    let client = "";
    if (this.state.account_type === false) {
      client = (
        <div className="client-reg">
          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="first_name"
              value={this.state.first_name}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>First Name *</label>
            <span className="focus-border" />
          </div>

          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="last_name"
              value={this.state.last_name}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>Last Name *</label>
            <span className="focus-border" />
          </div>

          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="city"
              value={this.state.city}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>City *</label>
            <span className="focus-border" />
          </div>

          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="state"
              value={this.state.state}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>State *</label>
            <span className="focus-border" />
          </div>
        </div>
      );
    } else if (this.state.account_type === true) {
      employer = (
        <div className="company-reg">
          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="company_name"
              value={this.state.company_name}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>Company Name *</label>
            <span className="focus-border" />
          </div>

          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="city"
              value={this.state.city}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>City *</label>
            <span className="focus-border" />
          </div>

          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="state"
              value={this.state.state}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>State *</label>
            <span className="focus-border" />
          </div>
        </div>
      );
    }
    return (
      <div className="main-signup">
        <div className="signup-form">Tell us a little about yourself:</div>
        <hr />
        <div className="employer-switch">
          <label className="switch">
            <input
              type="checkbox"
              name="account_type"
              className="input"
              checked={this.state.account_type}
              onChange={e =>
                this.setState({ [e.target.name]: e.target.checked })
              }
            />
            <span className="slider round" />
          </label>
          <h4>* I'm here for the best employees</h4>
        </div>
        <div className="register">
          <div className="register-form input-effect">
            <input
              className="emailInput"
              type="text"
              placeholder=""
              name="email"
              value={this.state.email}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
            <label>E-mail *</label>
            <span className="focus-border" />
          </div>

          <div>
            <div className="signuppwd-form input-effect">
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
              <label>Password *</label>
              <span className="focus-border" />
            </div>
          </div>
        </div>

        <div className="register">
          {employer}
          {client}
        </div>

        <button
          onClick={() => {
            this.props.register({
              email: this.state.email,
              password: this.state.password,
              account_type: this.state.account_type.toString(),
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              company_name: this.state.company_name,
              city: this.state.city,
              state: this.state.state
            });
            this.setState({
              email: "",
              password: "",
              first_name: "",
              last_name: "",
              company_name: "",
              city: "",
              state: "",
              account_type: false
            });
          }}
        >
          Register
        </button>
        <h5>* required field</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    hiring_partners: state.hiring_partners,
    registering: state.registering,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { register }
)(SignUp);
