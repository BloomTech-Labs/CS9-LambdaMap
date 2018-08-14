import React, { Component } from 'react';
import './Sidenav.css';
import maplogored from './maplogored.svg';
import lambdalogo from './lambdalogo.png';
import { FaHome, FaCopyright, FaAngleRight, FaMap, FaMapMarker, FaStar, FaEnvelope } from 'react-icons/fa';
import { MdSettings, MdAttachMoney } from 'react-icons/md';

export default class CompanyNav extends Component {
  render() {
    return (
        <div className="companyNav-container">
          <div className="secondary-container">
            <div className="lambdamap">
              <img src={maplogored} className="logo" alt="Lambda Maps" />
              <div className="lambda"><img src={lambdalogo} className="lambda-logo"/> Lambda Maps</div>
              <div className="quote">"Connecting you with Lambda School's best"</div>
            </div>
              <hr className="hrLambda"></hr>
            <li><FaHome className="icons" />Home</li>
            <li><FaMap className="icons" />Map</li>
            <li><FaMapMarker className="icons" />Job Seekers</li>
            <li><FaStar className="icons" />Favorites</li>
            <li><FaEnvelope className="icons" />Messages</li>
            <li><MdSettings className="icons" />Settings</li>
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
