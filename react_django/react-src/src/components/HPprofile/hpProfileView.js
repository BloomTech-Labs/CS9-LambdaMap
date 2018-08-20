import React, { Component } from 'react';
import { FaEnvelope, FaCheck, FaLink, FaStar } from 'react-icons/fa'
import './hpProfileView.css'

 export default class StudentSettings extends Component{
    render() {
        return(
            <div className="hp">
            <div className="hp-div">
            <div className="hp-info">
            <div className="hp-title-div">
            <div className="hp-location-div">
            <h1 className="hp-title">Amazon</h1>
            <h3 className="hp-location">Seatle, WA</h3>
            </div>
            <img className="hp-photo" src='http://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg' alt='amazon logo' />
            </div>
            <div className='hp-info-div'>
            <h5 className="hp-info-tag">Company Info</h5>
            <p className="hp-info-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className='hp-remote'>
            <button className="remote-check"><FaCheck /></button>
                <p className="hp-email">Open to remote employees</p>
                </div>
             </div>
           
            </div>
             <div className="hp-email-div">
             <FaEnvelope className="mail-logo" /><p className="hp-email">amazon.recruiter@gmail.com</p>
             </div>
             </div>
             {/* JOB LISTING*/}
             <div className="hp-job-card-div">
             <div className="hp-listing-div">
             <p className="hp-listing-title">Job Listings</p>
             </div>
             <div className='hp-job-cards'>
            <h5 className="hp-card-title">JR WEB DEVELOPER <FaStar className="link-icon"/></h5>
            <p className="hp-card-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className="hp-card-location">
             <p className="hp-card-title">Seattle, WA <FaLink className="link-icon" /></p>
             </div>
             </div>
             <div className='hp-job-cards'>
            <h5 className="hp-card-title">JR WEB DEVELOPER <FaStar className="link-icon"/></h5>
            <p className="hp-card-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className="hp-card-location">
             <p className="hp-card-title">Seattle, WA <FaLink className="link-icon" /></p>
             </div>
             </div>
             <div className='hp-job-cards'>
            <h5 className="hp-card-title">JR WEB DEVELOPER <FaStar className="link-icon"/></h5>
            <p className="hp-card-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className="hp-card-location">
             <p className="hp-card-title">Seattle, WA <FaLink className="link-icon" /></p>
             </div>
             </div>
             <div className='hp-job-cards'>
            <h5 className="hp-card-title">JR WEB DEVELOPER <FaStar className="link-icon"/></h5>
            <p className="hp-card-text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua.</p>
             <div className="hp-card-location">
             <p className="hp-card-title">Seattle, WA <FaLink className="link-icon" /></p>
             </div>
             </div>
             </div>
             <div className="hp-header">
            <button className="button">Logout</button>
            </div>
             </div>
        )
    }
} 