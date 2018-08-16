import React, { Component } from 'react';
import './HPnav.css';
import maplogored from './maplogored.svg';
import lambdalogo from './lambdalogo.png';
import { FaHome, FaCopyright, FaAngleRight, FaMap, FaMapMarker, FaStar, FaEnvelope } from 'react-icons/fa';
import { MdSettings, MdAttachMoney } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default class HPnav extends Component {
  render() {
    return (
        <div className="companyNav-container">
          <div className="secondary-container">
            <div className="lambdamap">
              <img src={maplogored} className="logo" alt="Lambda Maps" />
              <div className="lambda"><img src={lambdalogo} className="lambda-logo" alt="Lambda Logo"/> Lambda Maps</div>
              <div className="quote">"Connecting you with Lambda School's best"</div>
            </div>
              <hr className="hrLambda"></hr>
            <li><FaHome className="icons" />Home</li>
            <li><FaMap className="icons" />Map</li>
            <li><FaMapMarker className="icons" />Job Seekers</li>
            <li><FaStar className="icons" />Favorites</li>
            <li><FaEnvelope className="icons" />Messages</li>
            <Link to='/settings/' style={{ textDecoration: 'none' }}><li><MdSettings className="icons" />Settings</li>
            </Link>
            <li><MdAttachMoney className="icons" />Billing</li>
            <footer>
                <h5 className="footer"><FaCopyright className="footerIcon"/>DreamTeam</h5>
            </footer>
          </div>
          <div className="arrow">
            <FaAngleRight />
          </div>
        </div>
    )
  }
}
