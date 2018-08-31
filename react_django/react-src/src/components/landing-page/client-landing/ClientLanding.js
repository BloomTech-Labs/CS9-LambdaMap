//  hard coded info going to go back over and make sure it's the logged in user

import React, { Component } from "react";
import JSnav from "../../nav/job-seeker/JSnav";
import { Timeline } from "react-twitter-widgets";
import amazon from "./amazon-logo.gif";
import mark from "./0.jpg";
import { MdArrowDropDown } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import "./ClientLanding.css";

class ClientLanding extends Component {
  render() {
    return (
      <div className="client">
        <JSnav />
        <div className="signout">
          <button className="signoutbutton">Sign Out</button>
        </div>
        <div className="client-container">
          <div className="welcome-container">
            <div className="profile">
              <img src={mark} className="mark" />
              <h1>Welcome back, Mark.</h1>
              <h3>Here's what you missed while you were away:</h3>
              <h4>
                <FaBriefcase /> There were 16 new jobs posted in your area.
              </h4>
              <h4>Five of your favorited companies posted new jobs.</h4>
            </div>
            <div className="feat-job">
              <h4>We think you're a great fit for this job:</h4>
                <img src={amazon} />
                <p className="jobtitle">Amazon</p>
                <p className="job">Software Engineer</p>
                <p>
                  Device Ad Products is a business initiative focused on
                  monetizing Amazon owned and operated devices. To do this, we
                  are building a premium advertising platform that is unlike any
                  that exists today. This is a strategic initiative for the
                  company, and we are growing quickly. Our...
                </p>
                <h5>
                  See more <MdArrowDropDown />
                </h5>
            </div>
          </div>
          <div className="twitter">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "TechCrunch"
              }}
              options={{
                username: "TechCrunch",
                height: "600",
                width: "400"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
