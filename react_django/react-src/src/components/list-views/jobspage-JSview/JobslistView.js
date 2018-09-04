// Hiring Partner View for list of job seekers with filter
import compass from "../../compass.png";
import React, { Component } from "react";
import "./JobslistView.css";
import { FaCaretDown, FaStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import JSnav from "../../nav/job-seeker/JSnav";
import defaultuser from "./defaultuser.svg";
import { Link } from "react-router-dom";
import { get_listings } from "../../../actions";
import { connect } from "react-redux";

const Timestamp = require("react-timestamp");

class JobslistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobListing: []
    };
  }

  componentDidMount = () => {
    this.props.get_listings();
  };

  render() {
    return (
      <div className="main-jobslist">
        <JSnav />
        <div className="signout">
          <div className="backgroundskew" />
          <div className="backgroundskew2" />
          <button className="signoutbutton">Sign Out</button>
        </div>
        <div className="jobslist-container">
          <div className="filter-main">
            <header className="header">Job Listings</header>
            <div className="filter-display">
              <input type="checkbox" />
              <button>Filter</button>
              <FaCaretDown className="filter-icon" />
              <div className="filter-options">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>Software Engineer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>Full Stack Developer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>Front-end Developer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>Back-end Developer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>UI/UX Developer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>iOS Developer</h4>

                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <h4>Android Developer</h4>
              </div>
            </div>
          </div>
          <hr className="cards-hr" />
          <div className="joblistingcards-container">
            <div className="cards-main">
              {this.props.jobListing.job_listings.map(job_listing => (
                <div key={job_listing.ID} className="joblisting-cards">
                  <Link to={`/hpprofile/`} className="profile-link">
                    <div className="card-header">
                      <img
                        src={defaultuser}
                        className="Joblistcardpic"
                        alt="Job Seeker"
                      />
                      <div className="jobscard-name">
                        <h3>{job_listing.company_name}</h3>
                        <h5>
                          {job_listing.city}
                          {job_listing.state}
                        </h5>
                      </div>
                      <FaStar className="card-favIcon" />
                    </div>
                    <hr />
                    {job_listing.jobListings.map(jls => (
                      <div className="card-info">
                        <p>
                          <GoClock className="clock" />
                          <Timestamp time={jls.posted_time} actualSeconds />
                        </p>
                        <p className="card-bio">{jls.job_title}</p>
                        <p className="card-bio">{jls.job_desc}</p>
                        <hr />
                      </div>
                    ))}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/jsmap">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
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
  { get_listings }
)(JobslistView);
