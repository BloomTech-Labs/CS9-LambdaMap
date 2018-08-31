import React, { Component } from 'react';
import { FaEnvelope, FaCheck, FaLink, FaStar } from 'react-icons/fa'
import './hpProfileView.css';
import JSNav from '../nav/job-seeker/JSnav';
import amazon from './amazon.png';
import compass from "../compass.png";
import { Link } from "react-router-dom";

export default class HpProfileView  extends Component{
    render() {
        return(
            <div>
            <JSNav />
            <div className="hp">
            <div className="backgroundskew"></div>
            <div className="hp-div">
            <div className="hp-title-div">
            <img className="hp-photo" src={amazon} alt='amazon logo' />
            <div className="hp-location-div">
            <h1 className="hp-title">Amazon</h1>
            <h3 className="hp-location">Seattle, WA</h3>
            </div>
            </div>
            <div className='hp-info-div'>
            <h5 className="hp-info-tag">About Us</h5>
            <p className="hp-info-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.
           </p>
             <div className='hp-remote'>
            <button className="remote-check"><FaCheck className="check-icon" /></button>
                <p className="hp-email">Open to remote employees</p>
                </div>
             </div>
            
             <div className="hp-email-div">
             <FaEnvelope className="mail-logo" /><p className="hp-email">amazon.recruiter@gmail.com</p>
             </div>
             </div>
             {/* JOB LISTING*/}
            <div className="hp-listing-div">
             <p className="hp-listing-title">Recently Posted Jobs</p>
             </div>
             <div className="hp-job-card-div">
             <div className='hp-job-cards'>
             <div className="hp-title-div-2">
            <img className="hp-photo-2" src={amazon} alt='amazon logo' />
            <div className="hp-location-div">
            <h1 className="hp-title">Amazon</h1>
            <h3 className="hp-location">Seattle, WA</h3>
            </div>
            </div>
            <p className='posted-title'>Posted 2 days ago.</p>
             <div className='hp-card-title-div'>
            <h5 className="hp-card-title">JR WEB DEVELOPER</h5> <FaStar className="star-icon"/>
            </div>  
             <div className='hp-card-title-div'>
             <h5 className="hp-card-title">SEATTLE, WA</h5> <FaLink className="link-icon" />
             </div>
             </div>

             </div>
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
        )
    }
}