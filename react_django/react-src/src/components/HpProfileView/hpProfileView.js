import React, { Component } from "react";
import { FaEnvelope, FaCheck, FaLink, FaStar } from "react-icons/fa";
import "./hpProfileView.css";
import JSNav from "../nav/job-seeker/JSnav";
import JsMiniMap from "../miniMap/JsMiniMap/JsMiniMap";
import amazon from "./amazon.png";
import { get_hp, signout } from "../../actions";
import { connect } from "react-redux";
import { GoClock } from "react-icons/go";

const Timestamp = require("react-timestamp");

class HpProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hirePartner: [],
    };
  }
  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.get_hp(id);
  };
  render() {
    var mapListings = null;
    if (this.props.hirePartner.HP.job_listings !== undefined){
      mapListings = (
        <div>
          <div className="hp-listing-div">
            <h1 className="hp-listing-title">Recently Posted Jobs</h1>
          </div>
        {this.props.hirePartner.HP.job_listings.map(jls => ( 
          <div key={jls.ID} className="hp-job-card-div">
            <div className="hp-job-cards">
                <div className="hp-location-div">
                  <h1 className="hp-title">
                    {jls.fields.job_title}  <FaStar className="star-icon" />
                    </h1>
                  <h3 className="hp-location">
                    {this.props.hirePartner.HP.city},
                    {this.props.hirePartner.HP.state}
                  </h3>
                </div>
              <p className="posted-title">
                <GoClock className="clock" />
                <Timestamp time={jls.fields.posted_time} actualSeconds />
              </p>
              <div className="hp-card-title-div">
              <div>
              <p className="hp-card-text">{jls.fields.job_desc}</p>
              </div>
              <div>
              <a
            target="_blank"
            rel="noopener noreferrer"
            href={jls.fields.job_link}
          >
            <FaLink className="star-icon" />
          </a>
              </div>
              </div>
            </div> 
          </div>
           ))}
           </div>
      )
    }
    return (
      <div>
        <JSNav />
        <JsMiniMap />
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
                  {this.props.hirePartner.HP.city},
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
          {mapListings}
          <div className="hp-header">
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
        </div>
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
  { get_hp, signout }
)(HpProfileView);