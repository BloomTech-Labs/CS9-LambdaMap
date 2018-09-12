// Hiring Partner View for list of job seekers with filter
import React, { Component } from "react";
import "./JobslistView.css";
import { FaLink, FaAngleDoubleLeft, FaBriefcase } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import JSnav from "../../nav/job-seeker/JSnav";
import defaultuser from "./default-user.png";
import { Link } from "react-router-dom";
import { get_listings } from "../../../actions";
import { connect } from "react-redux";
import JsMiniMap from "../../miniMap/JsMiniMap/JsMiniMap";
import Messenger from "../../messenger/Messenger";
import marker from "./marker_icon.png";

const Timestamp = require("react-timestamp");

class JobslistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobListing: [],
      job_listing: {},
      display: false
    };
  }

  componentDidMount = () => {
    this.props.get_listings();
  };

  onTabClick = id => {
    this.props.jobListing.job_listings.filter(j => {
      if (j.ID === id) {
        this.setState({ job_listing: j });
        console.log(this.state.job_listing);
      }
    });
  };

  render() {
    let displayListing = null;
    let notDisplayed = null;
    if (this.state.display === true) {
      displayListing = (
        <div className="listing-cards">
          <h1>{this.state.job_listing.company_name}</h1>
          <h4>
            {this.state.job_listing.city}, {this.state.job_listing.state}
          </h4>
          {this.state.job_listing.jobListings.map(jls => (
            <div className="card-info">
              <p className="card-title">
                {jls.job_title} <FaLink />
              </p>
              <p className="card-desc">{jls.job_desc}</p>
              <p className="card-posttime">
                <GoClock className="clock" />
                <Timestamp time={jls.posted_time} actualSeconds />
              </p>
            </div>
          ))}
        </div>
      );
    } else {
      notDisplayed = (
        <div className="nolisting-cards">
          <h4>
            <FaAngleDoubleLeft /> Select a company on the left to begin browsing
            job listings
          </h4>
        </div>
      );
    }
    let companyListing = null;
    var randomCompany = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    if (randomCompany) {
      companyListing = (
        <div className="feat-hp">
          <div className="hp-info">
            <h1>{randomCompany.company_name}</h1>
            <h3 className="jobloc">
              {randomCompany.city}, {randomCompany.state}
            </h3>
            <p>{randomCompany.about}</p>
            <h4><FaBriefcase /> {randomCompany.jobListings.length} Job Listing(s)</h4>
          </div>
        </div>
      );
    }
    return (
      <div className="main-jobslist">
        <JSnav />
        <JsMiniMap />
        <Messenger />
        <div className="jobslist-container">
          <div className="signout">
            <button
              className="signoutbutton"
              onClick={() => {
                this.props.signout(this.props.history);
              }}
            >
              Sign Out
            </button>
          </div>
          <div className="mapped-jobs">
            <div className="mappedjobs-container">
              {this.props.jobListing.job_listings.map((job_listing, i) => (
                <div
                  key={i}
                  className="joblist-display"
                  onClick={() => {
                    this.onTabClick(job_listing.ID);
                    this.setState({
                      display: !this.state.display
                    });
                  }}
                >
                  <div className="card-header">
                    <img
                      src={defaultuser}
                      className="Joblistcardpic"
                      alt="Job Seeker"
                    />
                    <div className="jobscard-name">
                      <h3>{job_listing.company_name}</h3>
                      <h5>
                        {job_listing.city}, {job_listing.state}
                      </h5>
                      <p>{job_listing.jobListings.length} Job Listing(s)</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {displayListing}
            {notDisplayed}
          </div>
          <div className="featured-hps">
            <img src={marker} className="profile-marker" alt="marker" />
            <img src={defaultuser} className="featured" alt="default" />
            <div className="featured-profile">{companyListing}</div>
            <img src={marker} className="profile-marker2" alt="marker" />
            <img src={defaultuser} className="featured2" alt="default" />
            <div className="featured-profile2">{companyListing}</div>
            <img src={marker} className="profile-marker3" alt="marker" />
            <img src={defaultuser} className="featured3" alt="default" />
            <div className="featured-profile3">{companyListing}</div>
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
  { get_listings }
)(JobslistView);
