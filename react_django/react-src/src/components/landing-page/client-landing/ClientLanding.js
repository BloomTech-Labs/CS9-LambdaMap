//  hard coded info going to go back over and make sure it's the logged in user

import React, { Component } from "react";
import JSnav from "../../nav/job-seeker/JSnav";
// import { Timeline } from "react-twitter-widgets";
import amazon from "./amazon-logo.gif";
import mark from "./0.jpg";
import { MdArrowDropDown } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
import "./ClientLanding.css";
import { get_listings, signout } from "../../../actions/index";
import { connect } from "react-redux";

class ClientLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      jobListing: []
    };
  }

  componentDidMount = () => {
    this.props.get_listings();
  };

  render() {
    let companyListing = null;
    var randomCompany = this.props.jobListing.job_listings[
      Math.floor(Math.random() * this.props.jobListing.job_listings.length)
    ];
    if (randomCompany) {
      companyListing = (
        <div className="feat-job">
          <h4>We think you're a great fit for this job:</h4>
          <img src={amazon} />
          <p className="jobtitle">{randomCompany.company_name}</p>
          <p className="job">
            {randomCompany.jobListings[0].job_title}
          </p>
          <p>{randomCompany.jobListings[0].job_desc}</p>
          <h5>
            See more <MdArrowDropDown />
          </h5>
        </div>
      );
      // console.log(randomCompany)
    }
    return (
      <div className="client">
        <JSnav />
        <div className="signout">
            <button className="signoutbutton"  onClick={() => { this.props.signout(this.props.history) }}>Sign Out</button>
        </div>
        <div className="client-container">
          <div className="welcome-container">
            <div className="profile">
              <img src={mark} className="mark" />
              <h1>Welcome back, {this.props.clients.user.first_name}.</h1>
              <h3>Here's what you missed while you were away:</h3>
              <h4>
                <FaBriefcase /> There were 16 new jobs posted in your area.
              </h4>
              <h4>Five of your favorited companies posted new jobs.</h4>
            </div>
            {companyListing}
          </div>
          {/* <div className="twitter">
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
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, "mapstatetoprops");
  return {
    clients: state.clients,
    jobListing: state.jobListing,
    fetchingListings: state.fetchingListings,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { get_listings, signout }
)(ClientLanding);
