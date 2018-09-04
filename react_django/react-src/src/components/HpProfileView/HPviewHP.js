import React, { Component } from "react";
import { FaEnvelope, FaCheck, FaLink, FaStar } from "react-icons/fa";
import "./hpProfileView.css";
import HPNav from "../nav/company/HPnav";
import amazon from "./amazon.png";
import compass from "../compass.png";
import { Link } from "react-router-dom";
import { get_hp } from "../../actions";
import { connect } from "react-redux";
import { GoClock } from "react-icons/go";

const Timestamp = require("react-timestamp");

class HPviewHP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hirePartner: []
    };
  }
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.get_hp(id);
  };

  render() {
    return (
      <div>
        <HPNav />
        <div className="hp">
          <div className="backgroundskew" />
          <div className="hp-div">
            <div className="hp-title-div">
              <img className="hp-photo" src={amazon} alt="amazon logo" />
              <div className="hp-location-div">
                <h1 className="hp-title">
                  {this.props.hirePartner.HP.company_name}
                </h1>
                <h3 className="hp-location">
                  {this.props.hirePartner.HP.city},{" "}
                  {this.props.hirePartner.HP.state}
                </h3>
              </div>
            </div>
            <div className="hp-info-div">
              <h5 className="hp-info-tag">About Us</h5>
              <p className="hp-info-text">{this.props.hirePartner.HP.about}</p>
              <div className="hp-remote">
                <button className="remote-check">
                  <FaCheck className="check-icon" />
                </button>
                <p className="hp-email">Open to remote employees</p>
              </div>
            </div>

            <div className="hp-email-div">
              <FaEnvelope className="mail-logo" />
              <p className="hp-email">{this.props.hirePartner.HP.email}</p>
            </div>
          </div>
          {/* JOB LISTING*/}
          <div className="hp-listing-div">
            <p className="hp-listing-title">Recently Posted Jobs</p>
          </div>
          {/* {this.props.hirePartner.HP.job_listings.map(jls => ( */}
          <div className="hp-job-card-div">
            <div className="hp-job-cards">
              <div className="hp-title-div-2">
                <img className="hp-photo-2" src={amazon} alt="amazon logo" />
                <div className="hp-location-div">
                  <h1 className="hp-title">
                    {this.props.hirePartner.HP.company_name}
                  </h1>
                  <h3 className="hp-location">
                    {this.props.hirePartner.HP.city},{" "}
                    {this.props.hirePartner.HP.state}
                  </h3>
                </div>
              </div>
              <p className="posted-title">
                <GoClock className="clock" />
                <Timestamp time={this} actualSeconds />
              </p>
              <div className="hp-card-title-div">
                <h5 className="hp-card-title">{}</h5>{" "}
                <FaStar className="star-icon" />
              </div>
              <div className="hp-card-title-div">
                <h5 className="hp-card-title">
                  {this.props.hirePartner.HP.city},{" "}
                  {this.props.hirePartner.HP.state}
                </h5>{" "}
                <FaLink className="link-icon" />
              </div>
            </div>
          </div>
          {/* ))} */}
          <div className="hp-header">
            <div className="signout">
              <button className="signoutbutton">Sign Out</button>
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
    hirePartner: state.hirePartner,
    fetchingListings: state.fetchingHp,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { get_hp }
)(HPviewHP);
