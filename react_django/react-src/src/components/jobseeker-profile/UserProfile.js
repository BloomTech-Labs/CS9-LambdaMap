import React, { Component } from "react";
import "./JSprofile.css";
import defaultuser from "./default-user.png";
import JSnav from "../nav/job-seeker/JSnav";
import Messenger from "../messenger/Messenger";
import HpMiniMap from "../miniMap/HpMiniMap/HpMiniMap";
import { signout } from "../../actions";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaFile,
  FaDesktop,
  FaEnvelope,
  FaPhoneSquare,
  FaCheckSquare
} from "react-icons/fa";

export default class UserProfile extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("user"));
    let remoteWork = null;
    let relocating = null;
    if (user.remote === true) {
      remoteWork = (
        <p>
          <FaCheckSquare className="contactIcons" />
          Open to remote work
        </p>
      );
    } else if (user.relocate === true) {
      relocating = (
        <p>
          <FaCheckSquare className="contactIcons" />
          Open to relocating
        </p>
      );
    }
    return (
      <div className="main">
        <JSnav />
        <HpMiniMap />
        <Messenger />
        <div className="signout">
          <button
            className="signoutbutton"
            onClick={() => {
              signout(this.props.history);
            }}
          >
            Sign Out
          </button>
        </div>
        <div className="main-container">
          <div className="sidebyside">
            <div className="jsprofile-container">
              <div className="pic-bg">
                <img src={defaultuser} alt="jspic" />
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
                <h3>
                  {user.city}, {user.state}
                </h3>
              </div>
            </div>
            <div className="info-container">
              <div className="jsprofile-contact">
                <p>
                  <FaEnvelope className="contactIcons" />
                  {user.email}
                </p>
                <p>
                  <FaPhoneSquare className="contactIcons" />
                  {user.phone}
                </p>
                {remoteWork}
                {relocating}
                <h2>{user.profession}</h2>
              </div>
              <div className="jsprofile-about">
                <p>{user.about}</p>
              </div>
            </div>
          </div>
          <div className="socialmedia">
            <a target="_blank" rel="noopener noreferrer" href={user.twitter}>
              <FaTwitter className="smIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={user.linkedin}>
              <FaLinkedin className="smIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={user.github}>
              <FaGithub className="smIcons" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={user.codepen}>
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
      </div>
    );
  }
}
