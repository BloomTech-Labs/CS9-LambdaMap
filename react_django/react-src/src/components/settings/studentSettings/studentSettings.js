// Student view of settings page

import React, { Component } from 'react';
import './studentSettings.css';
import JSnav from '../../nav/job-seeker/JSnav';

export default class StudentSettings extends Component {
  
  render() {
    return (
      <div className="settings-nav">
      <JSnav />
      <div className="main-settings">
        <div className="signout">
          <button className="signoutbutton">Sign Out</button>
        </div>
        <header>Settings</header>
          <div className="settings-container">
            <div className="info-update">
            <h2>Update Contact Information</h2>
            <hr></hr>
              <div className="update-contact">
                <h3>E-mail: <input></input></h3>
                <h3 className="phone-input">Phone: <input></input></h3>
                </div>
                  <div className="opt-in">

                  <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                  </label>
                  <a className="opt-email">E-mail</a>

                  <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                  </label>
                  <a className="opt-text">Text</a>
                  </div>
              
              <div className="update-password">
                <h2>Update Password</h2>
                <hr></hr>
                <div className="update-pswd">
                <h3>Old Password: <input></input></h3>
                <h3 className="new-pswd">New Password: <input></input></h3>
                </div>
              </div>
              <button className="save-button">Save</button>
            </div>

            <div className="new-joblisting">
              <h2>Profile Information</h2>
              <hr></hr>
              <div className="listing-input">
                <input placeholder="Location"></input>
                <div className="opt-in">
                  <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                  </label>
                  <a className="opt-email">Remote</a>

                  <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                  </label>
                  <a className="opt-text">Relocate</a>
                  </div>
                  <h3>Job Title: <select className="select-box">
                    <option value="Web Developer">Web Developer</option>
                    <option value="UX Designer">UX Designer</option>
                     <option value="iOS Designer">iOS Designer</option>
                  </select></h3>
                <input placeholder="LinkedIn Profile Link"></input>
                <input placeholder="GitHub Profile Link"></input>
                <input placeholder="Portfolio Website Link"></input>
                <input placeholder="Twitter Link"></input>
                <button className="post-button-2">Upload Resume PDF</button>
                <button className="post-button-2">Upload Profile Picutre</button>
              </div>
              <button className="post-button">Post</button>

            </div>
          </div>
      </div>
      </div>
    )
  }
}