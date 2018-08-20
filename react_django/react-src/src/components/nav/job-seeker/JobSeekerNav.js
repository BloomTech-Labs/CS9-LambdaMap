// Job Seekers' side nav

import React, { Component } from 'react';
import './JSnav.css';
import maplogored from './maplogored.svg';
import lambdalogo from './lambdalogo.png';
import { FaHome, FaCopyright, FaAngleRight, FaMap, FaBriefcase, FaStar, FaEnvelope } from 'react-icons/fa';
import { MdSettings, MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';
import JSnav from './components/nav/company/JSnav'

export default class JobSeekerNav extends Component {
  render() {
    return (
        <div className="companyNav-container">
          <JSnav/>
          <div className="secondary-container">
            <div className="lambdamap">
              <img src={maplogored} className="logo" alt="Lambda Maps" />
              <div className="lambda"><img src={lambdalogo} className="lambda-logo"/> Lambda Maps</div>
              <div className="quote">"Connecting you with the best Hiring Partners"</div>
            </div>
              <hr className="hrLambda"></hr>
            <li><FaHome className="icons" />Home</li>
            <li><FaMap className="icons" />Map</li>
            <li><FaBriefcase className="icons" />Jobs</li>
            <li><FaStar className="icons" />Favorites</li>
            <li><FaEnvelope className="icons" />Messages</li>
            <Link to='/' style={{ textDecoration: 'none' }}><li><MdSettings className="icons" />Settings</li>
            </Link>
            <li><MdAttachMoney className="icons" />Billing</li>
            <footer>
                <h5 className="footer"><FaCopyright className="footerIcon"/>DreamTeam</h5>
            </footer>
          </div>
          <div className="arrow">
            <FaAngleRight />
          </div>
          <div className="skew"></div>
          <div className="skew2"></div>
        </div>
    )
  }
}
