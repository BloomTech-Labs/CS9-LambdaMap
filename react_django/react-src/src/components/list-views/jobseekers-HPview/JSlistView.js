// Hiring Partner View for list of job seekers with filter

import React, { Component } from 'react';
import './JSlistView.css';
import { FaCaretDown, FaStar, FaSquare, FaTwitter, FaLinkedin, FaGithub, FaCodepen, FaFile, FaDesktop, FaEnvelope, FaPhoneSquare } from 'react-icons/fa';
import HPnav from '../../nav/company/HPnav';
import defaultuser from "./defaultuser.svg";
import { Link } from 'react-router-dom';

export default class JSlistView extends Component {

  render() {
    return (
      <div className="main-JSlist">
        <HPnav />
        <div className="signout">
        <div className="backgroundskew"></div>
        <div className="backgroundskew2"></div>
          <button className="signoutbutton">Sign Out</button>
        </div>
        <div className="jslist-container">
          <div className="filter-main">
            <header className="header">Prospective Candidates</header>
            <div className="filter-display" >
            <input type="checkbox" />
            <button>Filter</button><FaCaretDown className="filter-icon" />
              <div className="filter-options">
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Software Engineer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Full Stack Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Front-end Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Back-end Developer</h4>

                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>UI/UX Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>iOS Developer</h4>
              
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label><h4>Android Developer</h4>
              
              </div>
            </div>
          </div>
          <hr className="cards-hr"></hr>
          <div className="jobseekercards-container">
          <div className="cards-main">
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            <div className="jobseeker-cards">
            <Link to={'/'} className="profile-link">
              <div className="card-header">
              <img src={defaultuser} className="JScardpic" alt="Job Seeker" />
              <div className="jscard-name">
              <h3>Robert Smith</h3>
              <h5>Anaheim Hills, CA</h5>
              </div>
              <FaStar className="card-favIcon"/>
              </div>
              <div className="card-info">
                <p className="card-bio">Lucas ipsum dolor sit amet droid bothan antilles baba antilles moff hutt gonk lando windu.</p>
                <a className="emailcontact"><FaEnvelope className="contactIcons"/>robert.smith@gmail.com</a>
                <a className="phonecontact"><FaPhoneSquare className="contactIcons"/>(909) 234-5678</a>
              </div>
              <div className="card-socialmedia">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><FaTwitter className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><FaLinkedin className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FaGithub className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/"><FaCodepen className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaFile className="card-smIcons"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/"><FaDesktop className="card-smIcons"/></a>
              </div>
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
