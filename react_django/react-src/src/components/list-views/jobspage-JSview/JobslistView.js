// Hiring Partner View for list of job seekers with filter

import React, { Component } from 'react';
import './JobslistView.css';
import { FaCaretDown, FaStar, FaSquare, FaTwitter, FaLinkedin, FaGithub, FaCodepen, FaFile, FaDesktop, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import HPnav from '../../nav/company/HPnav';
import defaultuser from "./defaultuser.svg";
import { Link } from 'react-router-dom';
import { get_listings } from '../../../actions';
import { connect } from 'react-redux';

class JobslistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobListing: [],
    }
  }

  componentDidMount = () => {
    console.log(this.props.get_listings)
    this.props.get_listings();
  }

  render() {
    console.log(this.props)
    console.log(this.state.job_listings)
    return (
      <div className="main-jobslist">
        <HPnav />
        <div className="signout">
        <div className="backgroundskew"></div>
        <div className="backgroundskew2"></div>
          <button className="signoutbutton">Sign Out</button>
        </div>
        <div className="jobslist-container">
          <div className="filter-main">
            <header className="header">Job Listings</header>
            <div className="filter-display" >
            <input type="checkbox" />
            <button>Filter</button><FaCaretDown className="filter-icon" />
              <div className="filter-options">
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Software Engineer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Full Stack Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Front-end Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Back-end Developer</h4>

                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>UI/UX Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>iOS Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Android Developer</h4>
              </div>
            </div>
          </div>
          <hr className="cards-hr"></hr>
          <div className="joblistingcards-container">
          <div className="cards-main">
            {this.props.jobListing.job_listings.map(job_listing =>
                <div key={job_listing.ID} className="joblisting-cards">
                  <Link to={'/'} className="profile-link">
                    <div className="card-header">
                      <img src={defaultuser} className="Joblistcardpic" alt="Job Seeker" />
                        <div className="jobscard-name">
                          <h3>{job_listing.company_name}</h3>
                          <h5>{job_listing.city}{job_listing.state}</h5>
                        </div>
                          <FaStar className="card-favIcon"/>
                    </div>
                    {job_listing.jobListings.map(jls =>
                      <div className="card-info">
                        <p className="card-bio">{jls.job_title}</p>
                        <p className="card-bio">{jls.job_desc}</p>
                      </div>)}
                  </Link>
                </div>)}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    jobListing: state.jobListing,
    fetchingListings: state.fetchingListings,
    error: state.error
  };
};

export default connect(mapStateToProps, { get_listings })(JobslistView);