// Student view of settings page

import React, { Component } from "react";
import "./studentSettings.css";
import JSnav from "../../nav/job-seeker/JSnav";
import { Link } from "react-router-dom";
import compass from "../../compass.png";
import DragDrop from "../../Modals/dragDrop";

export default class StudentSettings extends Component {
  constructor() {
    super();
    this.state = {
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
        {modal}
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

            <div className="new-joblisting">
              <h2>Profile Information</h2>
              <hr />
              <div className="listing-input">
                <input placeholder="Location" />
                <div className="opt-in">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                  <a className="opt-email">Remote</a>

                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                  <a className="opt-text">Relocate</a>
                </div>
                <h3>
                  Job Title:
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
        <Link to="/jsmap">
          <img src={compass} alt="compass" className="compass" />
        </Link>
      </div>
    );
  }
}
