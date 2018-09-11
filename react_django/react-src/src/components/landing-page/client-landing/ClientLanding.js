//  hard coded info going to go back over and make sure it's the logged in user

import React, { Component } from "react";
import JSnav from "../../nav/job-seeker/JSnav";
import { Timeline } from "react-twitter-widgets";
import amazon from "./amazon-logo.gif";
import mark from "./0.jpg";
import { MdArrowDropDown } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import "./ClientLanding.css";
import amazon from "./amazon-logo.png";
import mark from "./0.png";
import marker from "./marker_icon.png";
import { get_listings, signout } from "../../../actions/index";
import { connect } from "react-redux";
import { GoClock } from "react-icons/go";
import { TiPin } from "react-icons/ti";

import JsMiniMap from "../../miniMap/JsMiniMap/JsMiniMap";
const Timestamp = require("react-timestamp");

class ClientLanding extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    let companyListing = null;
    let favoritesListing = null;
    let favoritesListing2 = null;
    let favoritesListing3 = null;
    let favoritesListing4 = null;
    var randomCompany = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    var randomCompany2 = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    var randomCompany3 = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    var randomCompany4 = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    if (randomCompany) {
      companyListing = (
        <div className="feat-job">
          <img src={amazon} alt="company" />
          <div className="list-info">
            <div className="pinit">
              {/* <h3 className="jobloc">{randomCompany.company_name}</h3> */}
              <h3 className="jobloc">
                {randomCompany.city}, {randomCompany.state}
              </h3>{" "}
              <TiPin className={this.state.color} onClick={this.favorited} />
            </div>
            <h5 className="job">{randomCompany.jobListings[0].job_title}</h5>
            <p>{randomCompany.jobListings[0].job_desc}</p>
            <p className="post-time">
              <GoClock className="post-clock" />{" "}
              <Timestamp
                time={randomCompany.jobListings[0].posted_time}
                actualSeconds
              />
            </p>
          </div>
        </div>
      );
    }
    if (randomCompany2) {
      favoritesListing2 = (
        <div className="pinned-listing">
          <img src={amazon} alt="company" />
          <div className="list-info">
            <div className="pinit">
              <h3 className="jobloc">{randomCompany.city}, {randomCompany.state}</h3>
              <TiPin className="pin-icon" />
            </div>
              <h5 className="job">{randomCompany.jobListings[1].job_title}</h5>
            <p>{randomCompany.jobListings[1].job_desc}</p>
            <p className="post-time">
              <GoClock className="post-clock" />
              <Timestamp
                time={randomCompany.jobListings[1].posted_time}
                actualSeconds
              />
            </p>
          </div>
        </div>
      );
    }
    if (randomCompany3) {
      favoritesListing3 = (
        <div className="pinned-listing">
          <img src={amazon} alt="company" />
          <div className="list-info">
            <div className="pinit">
              <h3 className="jobloc">{randomCompany.city}, {randomCompany.state}</h3>
              <TiPin className="pin-icon" />
            </div>
              <h5 className="job">{randomCompany.jobListings[2].job_title}</h5>
            <p>{randomCompany.jobListings[2].job_desc}</p>
            <p className="post-time">
              <GoClock className="post-clock" />
              <Timestamp
                time={randomCompany.jobListings[2].posted_time}
                actualSeconds
              />
            </p>
          </div>
        </div>
      );
    }
    if (randomCompany4) {
      favoritesListing4 = (
        <div className="pinned-listing">
          <img src={amazon} alt="company" />
          <div className="list-info">
            <div className="pinit">
              <h3 className="jobloc">{randomCompany.city}, {randomCompany.state}</h3>
              <TiPin className="pin-icon" />
            </div>
              <h5 className="job">{randomCompany.jobListings[3].job_title}</h5>
            <p>{randomCompany.jobListings[3].job_desc}</p>
            <p className="post-time">
              <GoClock className="post-clock" />
              <Timestamp
                time={randomCompany.jobListings[3].posted_time}
                actualSeconds
              />
            </p>
          </div>
        </div>
      );
    }
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
          {companyListing}
          <h3 className="pinned-title">Pinned Jobs:</h3>
          <div className="pinned-jobs">
            <div className="pinned-container">
              {favoritesListing}
              {favoritesListing2}
              {favoritesListing3}
              {favoritesListing4}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
