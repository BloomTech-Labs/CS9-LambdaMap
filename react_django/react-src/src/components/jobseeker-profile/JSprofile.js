// Hiring Partner View of individual job seeker profile
import React, { Component } from "react";
import "./JSprofile.css";
import defaultuser from "./defaultuser.svg";
import {
  FaSquare,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaFile,
  FaDesktop,
  FaEnvelope,
  FaPhoneSquare
} from "react-icons/fa";
import HPnav from "../nav/company/HPnav";
import { get_client } from "../../actions";
import { connect } from "react-redux";
import HpMiniMap from "../miniMap/HpMiniMap/HpMiniMap";

class JSprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.get_client(id);
  };

  render() {
    return (
      <div className="main">
        <HPnav />
        <HpMiniMap />
        <div className="signout">
          <div className="backgroundskew" />
          <button className="signoutbutton">Sign Out</button>
        </div>
        <div className="jsprofile-container">
          <div className="contact">
            <a className="emailcontact">
              <FaEnvelope className="contactIcons" />
              {this.props.clients.client.email}
            </a>
            <a className="phonecontact">
              <FaPhoneSquare className="contactIcons" />
              {this.props.clients.client.phone}
            </a>
          </div>
          <div className="JSinfo">
            <p className="JSname">
              {this.props.clients.client.first_name}
              {this.props.clients.client.last_name}
            </p>
            <p className="JSlocation">
              {this.props.clients.client.city}
              {this.props.clients.client.state}
            </p>
          </div>
          <div className="profilepic">
            <img src={defaultuser} className="JSprofilepic" alt="Job Seeker" />
          </div>
        </div>
        <hr />
        <div className="JSoptions">
          <p className="remote">
            <FaSquare className="optionbox2" /> Open to remote
          </p>
          <p className="relocate">
            <FaSquare className="optionbox" /> Open to relocate
          </p>
        </div>
        <div className="JSbio">
          <p>{this.props.clients.client.about}</p>
        </div>
        <div className="socialmedia">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.clients.client.twitter}
          >
            <FaTwitter className="smIcons" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.clients.client.linkedin}
          >
            <FaLinkedin className="smIcons" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.clients.client.github}
          >
            <FaGithub className="smIcons" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={this.props.clients.client.codepen}
          >
            <FaCodepen className="smIcons" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com"
          >
            <FaFile className="smIcons" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com"
          >
            <FaDesktop className="smIcons" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "mapstatetoprops");
  return {
    clients: state.clients,
    client: state.client,
    fetchingClient: state.fetchingClient,
    error: state.error
  };
};

export default connect( mapStateToProps, { get_client })(JSprofile);