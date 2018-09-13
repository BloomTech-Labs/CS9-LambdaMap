// Hiring Partner View for list of job seekers with filter

import React, { Component } from "react";
import "./JSlistView.css";
import {
  FaCaretDown,
  FaStar,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaFile,
  FaDesktop,
  FaEnvelope,
  FaPhoneSquare
} from "react-icons/fa";
import HPnav from "../../nav/company/HPnav";
import { Link } from "react-router-dom";
import { get_clients, signout } from "../../../actions";
import { connect } from "react-redux";
import HpMiniMap from "../../miniMap/HpMiniMap/HpMiniMap"

class JSlistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount = () => {
    this.props.get_clients();
  };

  render() {
    console.log(this.state.clients);
    return (
      <div className="main-JSlist">
        <HPnav />
        <HpMiniMap />
        <div className="signout">
          <div className="backgroundskew" />
          <div className="backgroundskew2" />
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
        </div>
        <div className="jslist-container">
          <div className="filter-main">
            <header className="header">Prospective Candidates</header>
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
          <div className="jobseekercards-container">
            <div className="cards-main">
              {this.props.clients.clients.map(clients => (
                <div className="jobseeker-cards">
                  <Link
                    to={`/jsprofile/${clients.ID}`}
                    key={clients.ID}
                    className="profile-link"
                  >
                    <div className="card-header">
                      <img
                        src={`http://127.0.0.1:8000/media/${clients.picture}`}
                        className="JScardpic"
                        alt="Job Seeker"
                      />
                      <div className="jscard-name">
                        <h3>
                          {clients.first_name}
                          {clients.last_name}
                        </h3>
                        <h5>
                          {clients.city}
                          {clients.state}
                        </h5>
                      </div>
                      <FaStar className="card-favIcon" />
                    </div>
                    <div className="card-info">
                      <p className="card-bio">{clients.about}</p>
                      <a className="emailcontact">
                        <FaEnvelope className="contactIcons" />
                        {clients.email}
                      </a>
                      <a className="phonecontact">
                        <FaPhoneSquare className="contactIcons" />
                        {clients.phone}
                      </a>
                    </div>
                    <div className="card-socialmedia">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={clients.twitter}
                      >
                        <FaTwitter className="card-smIcons" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={clients.linkedin}
                      >
                        <FaLinkedin className="card-smIcons" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={clients.github}
                      >
                        <FaGithub className="card-smIcons" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={clients.codepen}
                      >
                        <FaCodepen className="card-smIcons" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com"
                      >
                        <FaFile className="card-smIcons" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={clients.personalWebsite}
                      >
                        <FaDesktop className="card-smIcons" />
                      </a>
                    </div>
                  </Link>
                </div>
              ))}
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
    fetchingClients: state.fetchingClients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { get_clients, signout }
)(JSlistView);