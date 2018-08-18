// Hiring Partner View of individual job seeker profile

import React, { Component } from 'react';
import './JSprofile.css';
import defaultuser from "./defaultuser.svg";
import { FaSquare, FaTwitter, FaLinkedin, FaGithub, FaCodepen, FaFile, FaDesktop, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import HPnav from '../nav/company/HPnav';
import Register from '../landing/Register';
import { Link } from 'react-router-dom';
export default class JSprofile extends Component {
  render() {
    return (
      <div className="main">
      <HPnav />
      <Link to="Register"> Register </Link>
      <div className="signout">
      <div className="backgroundskew"></div>
      <button className="signoutbutton">Sign Out</button>
      </div>
      <div className="jsprofile-container">
        <div className="contact">
          <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
          <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
        </div>
        <div className="JSinfo">
          <p className="JSname">Robert Smith</p>
          <p className="JSlocation">Anaheim Hills, CA</p>
        </div>
        <div className="profilepic">
          <img src={defaultuser} className="JSprofilepic" alt="Job Seeker" />
        </div>
      </div>
      <hr></hr>
      <div className="JSoptions">
        <p className="remote"><FaSquare className="optionbox2"/> Open to remote</p>
        <p className="relocate"><FaSquare className="optionbox"/> Open to relocate</p>
      </div>
      <div className="JSbio">
        <p>Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk
           lando windu. Kessel utapau utapau leia tatooine fett ben bespin calamari.
           Aayla binks mustafar palpatine palpatine jawa skywalker luke lando. Antilles
           moff hutt dagobah kessel. Hutt aayla tatooine hutt zabrak darth bothan r2-
           d2 darth. Wookiee jango qui-gon organa kessel. Mustafar mothma cade thrawn
           solo anakin mon dooku. Hutt jar yoda alderaan grievous palpatine
           wampa dagobah. Yoda jade mara sidious ackbar hutt mandalore.
        </p>
      </div>
      <div className="socialmedia">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="smIcons"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="smIcons"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="smIcons"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="smIcons"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="smIcons"/></a>
				<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="smIcons"/></a>
      </div>
      </div>
    )
  }
}
