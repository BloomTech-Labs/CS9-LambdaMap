// Hiring Partner view of settings page

import React, { Component } from "react";
import "./HPsettings.css";
import HPnav from "../../nav/company/HPnav";
import { Link } from "react-router-dom";
import { create_listing } from "../../../actions/index";
import { connect } from "react-redux";

class HPsettings extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     jobListing: []
  //   };
  // }

  componentDidMount = id => {
    this.props.create_listing(id);
  };

  render() {
    return (
      <div className="settings-nav">
        <HPnav />
        <div className="main-settings">
          <div className="signout">
            <button className="signoutbutton">Sign Out</button>
          </div>
          <header>Settings</header>
          <div className="settings-container">
            <div className="info-update">
              <h2>Update Contact Information</h2>
              <hr />
              <div className="update-contact">
                <h3>
                  E-mail: <input />
                </h3>
                <h3 className="phone-input">
                  Phone: <input />
                </h3>
              </div>
              <div className="opt-in">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <a className="opt-email">E-mail</a>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <a className="opt-text">Text</a>
              </div>

              <div className="update-password">
                <h2>Update Password</h2>
                <hr />
                <div className="update-pswd">
                  <h3>
                    Old Password: <input />
                  </h3>
                  <h3 className="new-pswd">
                    New Password: <input />
                  </h3>
                </div>
              </div>
              <button className="save-button">Save</button>
            </div>
          </div>
          <div>
            <input placeholder="Company Name" />
            <input placeholder="Location" />
            <input placeholder="Company Website" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobListing: state.jobListing,
    fetchingListings: state.fetchingListings,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { create_listing }
)(HPsettings);
