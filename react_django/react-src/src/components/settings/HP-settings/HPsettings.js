// Hiring Partner view of settings page

import React, { Component } from 'react';
import './HPsettings.css';
import HPnav from '../../nav/company/HPnav';

export default class HPsettings extends Component {
  
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
              <h2>Add New Job Listing</h2>
              <hr></hr>
              <div className="listing-input">
                <input placeholder="Company Name"></input>
                <input placeholder="Location"></input>
                <input placeholder="Company Website"></input>
                <input placeholder="Job Title"></input>
                <input placeholder="Job Description"></input>
                  <div className="remote-switch">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                    <a className="remote-pos">Remote Postition</a>
                  </div>
              </div>
              <button className="post-button">Post</button>

            </div>
          </div>
      </div>
      </div>
    )
  }
}
