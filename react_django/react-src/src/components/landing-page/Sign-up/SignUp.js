// SignUp page

import React, { Component } from "react";
import { register } from "../../../actions";
import { connect } from "react-redux";
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
          <input
            type="text"
            placeholder="First Name *"
            name="first_name"
            className="input"
            value={this.state.first_name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <input
            type="text"
            placeholder="Last Name *"
            name="last_name"
            className="input"
            value={this.state.last_name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <input
            type="text"
            placeholder="City *"
            name="city"
            className="input"
            value={this.state.city}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <input
            type="text"
            placeholder="State *"
            name="state"
            className="input"
            value={this.state.state}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </div>
      );
    } else if (this.state.account_type === true) {
      employer = (
        <div className="company-reg">
          <input
            type="text"
            placeholder="Company Name *"
            name="company_name"
            className="input"
            value={this.state.company_name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <input
            type="text"
            placeholder="City *"
            name="city"
            className="input"
            value={this.state.city}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <input
            type="text"
            placeholder="State *"
            name="state"
            className="input"
            value={this.state.state}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
        </div>
      );
    }
    return (
      <div className="main-signup">
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
          <h2>* Are you an Employer?</h2>
        </div>

        <input
          type="text"
          placeholder="E-mail *"
          name="email"
          className="input"
          value={this.state.email}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />

        <input
          type="text"
          placeholder="Password *"
          name="password"
          className="input"
          value={this.state.password}
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
        />

        {employer}
        {client}

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
          Punch it
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
