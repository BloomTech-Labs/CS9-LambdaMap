// Student view of settings page

import { signout, update } from "../../../actions/index";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./studentSettings.css";
import JSnav from "../../nav/job-seeker/JSnav";
import DragDrop from "../../Modals/dragDrop";
import JsMiniMap from "../../miniMap/JsMiniMap/JsMiniMap";

class StudentSettings extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      city: "",
      state: "",
      twitter:"",
      linkedin:"",
      github:"",
      dragDrop: false,
      User: {
        picture: null
      }
    };
  }

  renderDragDrop = e => {
    e.stopPropagation();
    this.setState({ dragDrop: !this.state.dragDrop });
  };

  render() {
    let modal;
    if (this.state.dragDrop) {
      modal = <DragDrop renderDragDrop={this.renderDragDrop} />;
    }
    return (
      <div className="settings-nav">
        <JSnav />
        <JsMiniMap />
        {modal}
        <div className="main-settings">
          <div className="signout">
            <button className="signoutbutton">Sign Out</button>
          </div>
          <header>Settings</header>
          <div className="settings-container">
            {/* <div className="info-update">
              <h2>Update Contact Information</h2>
              <hr />
              <div className="update-contact">
                <h3>
                  E-mail: <input 
                  type="text"
                  placeholder={this.props.clients.user.email}
                  value={this.state.email}
                  />
                </h3>
                <h3 className="phone-input">
                  Phone: <input
                     type="text"
                     placeholder={this.props.clients.user.phone}
                     value={this.state.phone}
                  />
                </h3>
              </div>

              <div className="update-password">
                <h2>Update Password</h2>
                <hr />
                <div className="update-pswd">
                  <h3>
                    Old Password: <input
                       type="text"
                       placeholder="Password"
                       value={this.state.oldpassword}
                    />
                  </h3>
                  <h3 className="new-pswd">
                    New Password: <input 
                       type="text"
                       placeholder="New Password"
                       value={this.state.newpassword}
                    />
                  </h3>
                </div>
              </div>
              <button className="save-button">Save</button>
            </div> */}

            <div className="new-joblisting">
              <h2>Profile Information</h2>
              <hr />
              <div className="listing-input">
                <input placeholder="City" />
                <input placeholder="State" />
                <h3>
                  Job Title: <span></span>
                  <select className="select-box">
                    <option value="Web Developer">Web Developer</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="iOS Designer">iOS Designer</option>
                  </select>
                </h3>
                <input placeholder="LinkedIn Profile Link" />
                <input placeholder="GitHub Profile Link" />
                <input placeholder="Portfolio Website Link" />
                <input placeholder="Twitter Link" />
                <button className="post-button-2">Upload Resume PDF</button>
                <button
                  className="post-button-2"
                  onClick={e => {
                    this.renderDragDrop(e);
                  }}
                >
                  Upload Profile Picutre
                </button>
              </div>
              <button className="post-button">Post</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { signout, update }
)(StudentSettings);