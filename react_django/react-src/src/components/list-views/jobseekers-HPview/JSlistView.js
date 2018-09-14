// Hiring Partner View for list of job seekers with filter

// Hiring Partner View for list of job seekers with filter
import React, { Component } from "react";
import "./JSlistView.css";
import { FaLink, FaAngleDoubleLeft } from "react-icons/fa";
import HPnav from "../../nav/company/HPnav";
import { Link } from "react-router-dom";
import { get_clients } from "../../../actions";
import { connect } from "react-redux";
import HpMiniMap from "../../miniMap/HpMiniMap/HpMiniMap";
import defaultuser from "./default-user.png";
import Messenger from "../../messenger/Messenger";
import marker from "./marker_icon.png";

class JSlistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      client: {}
    };
  }

  componentDidMount = () => {
    this.props.get_clients();
  };

  onTabClick = id => {
    this.props.clients.clients.filter(c => {
      if (c.ID === id) {
        this.setState({ client: c });
      }
      return console.log("client");
    });
  };

  render() {
    let displayClient = null;
    let notDisplayed = null;
    if (this.state.display === true) {
      displayClient = (
        <div className="listing-cards">
          <h1>
            {this.state.client.first_name}, {this.state.client.last_name}
          </h1>
          <h4>
            {this.state.client.city}, {this.state.client.state}
          </h4>
          <div className="card-info">
            <p className="card-title">
              {this.state.client.profession} <FaLink />
            </p>
            <p className="card-desc">{this.state.client.about}</p>
          </div>
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
    let featClient = null;
    var randomClient = this.props.clients.clients[
      Math.floor(Math.random() * this.props.clients.clients.length)
    ];
    if (randomClient) {
      featClient = (
        <div className="feat-hp">
          <div className="hp-info">
            <img src={marker} className="profile-marker" alt="marker" />
            <img
              src={`http://127.0.0.1:8000/media/${randomClient.picture}`}
              alt="listing"
              className="featured"
            />
            <h1>
              {randomClient.first_name}, {randomClient.last_name}
            </h1>
            <h3 className="jobloc">
              {randomClient.city}, {randomClient.state}
            </h3>
            <p>{randomClient.about}</p>
            <Link
              to={`/jsprofile/${randomClient.ID}`}
              key={this.state.client.ID}
              className="profile-link"
            >
              Profile
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="main-jobslist">
        <HPnav />
        <HpMiniMap />
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
              {this.props.clients.clients.map((client, i) => (
                <div
                  key={i}
                  className="joblist-display"
                  onClick={() => {
                    this.onTabClick(client.ID);
                    this.setState({
                      display: !this.state.display
                    });
                  }}
                >
                  <div className="card-header">
                    <img
                      src={`http://127.0.0.1:8000/media/${client.picture}`}
                      alt="listing"
                    />
                    <div className="jobscard-name">
                      <h3>
                        {client.first_name}, {client.last_name}
                      </h3>
                      <h5>
                        {client.city}, {client.state}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {displayClient}
            {notDisplayed}
          </div>
          <div className="featured-hps">
            <div className="featured-profile">{featClient}</div>
            <div className="featured-profile2">{featClient}</div>
            <div className="featured-profile3">{featClient}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    client: state.client,
    fetchingClients: state.fetchingClients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { get_clients }
)(JSlistView);
