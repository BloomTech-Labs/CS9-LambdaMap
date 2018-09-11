// Student view of settings page

import { signout, update } from "../../../actions/index";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./studentSettings.css";
import JSnav from "../../nav/job-seeker/JSnav";
import DragDrop from "../../Modals/dragDrop";
import JsMiniMap from "../../miniMap/JsMiniMap/JsMiniMap";

class StudentSettings extends Component {
  constructor() {
    super();
    this.state = {
      profession: "",
      city: "",
      state: "",
      codepen: "",
      twitter:"",
      linkedin:"",
      github:"",
      phone: "",
      website: "",
      about: "",
      dragDrop: false,
      picture: ""
    };
  }

  submit = e => {
  	e.preventDefault();
  	const { profession, city, state, codepen, twitter, linkedin, github, phone, website, about  } = this.state;
  	this.props.update({
			profession: profession !== "" ? profession : profession,
      state: state !== "" ? state : state,
      city: city !== "" ? city : city,
			codepen: codepen !== "" ? codepen : codepen,
      linkedin:linkedin !== "" ?linkedin :linkedin,
      github: github !== "" ? github : github,
      phone: phone !== "" ? phone : phone,
      personal_website: website !== "" ? website :website,
      about: about !== "" ? about : about,
      twitter: twitter !== "" ? twitter : twitter,
    });
  	this.props.history.push('/jssettings');
	}

  renderDragDrop = e => {
    e.stopPropagation();
    this.setState({'dragDrop': !this.state.dragDrop})
  }

  render() {
    let modal;
    if(this.state.dragDrop) {
      modal = <DragDrop renderDragDrop={this.renderDragDrop}/>
    }
    // <div className="settings-nav">
    // <JSnav />
    // {modal}
    // <div className="main-settings">
    //   <div className="signout">
    //     <button className="signoutbutton">Sign Out</button>
    //   </div>
    //   <header>Settings</header>
    //     <div className="settings-container">
    //       <div className="info-update">
    //       <h2>Update Contact Information</h2>
    //       <hr></hr>
    //         <div className="update-contact">
    //           <h3>E-mail: <input></input></h3>
    //           <h3 className="phone-input">Phone: <input></input></h3>
    //           </div>
    //             <div className="opt-in">
    //
    //             <label className="switch">
    //             <input type="checkbox"></input>
    //             <span className="slider round"></span>
    //             </label>
    //             <a className="opt-email">E-mail</a>
    //
    //             <label className="switch">
    //             <input type="checkbox"></input>
    //             <span className="slider round"></span>
    //             </label>
    //             <a className="opt-text">Text</a>
    //             </div>
    //
    //         <div className="update-password">
    //           <h2>Update Password</h2>
    //           <hr></hr>
    //           <div className="update-pswd">
    //           <h3>Old Password: <input></input></h3>
    //           <h3 className="new-pswd">New Password: <input></input></h3>
    //           </div>
    //         </div>
    //         <button className="save-button">Save</button>
    //       </div>
    //
    //       <div className="new-joblisting">
    //         <h2>Profile Information</h2>
    //         <hr></hr>
    //         <div className="listing-input">
    //           <input placeholder="Location"></input>
    //           <div className="opt-in">
    //             <label className="switch">
    //             <input type="checkbox"></input>
    //             <span className="slider round"></span>
    //             </label>
    //             <a className="opt-email">Remote</a>
    //
    //             <label className="switch">
    //             <input type="checkbox"></input>
    //             <span className="slider round"></span>
    //             </label>
    //             <a className="opt-text">Relocate</a>
    //             </div>
    //             <h3>Job Title: <select className="select-box">
    //               <option value="Web Developer">Web Developer</option>
    //               <option value="UX Designer">UX Designer</option>
    //                <option value="iOS Designer">iOS Designer</option>
    //             </select></h3>
    //           <input placeholder="LinkedIn Profile Link"></input>
    //           <input placeholder="GitHub Profile Link"></input>
    //           <input placeholder="Portfolio Website Link"></input>
    //           <input placeholder="Twitter Link"></input>
    //           <button className="post-button-2">Upload Resume PDF</button>
    //           <button className="post-button-2" onClick={(e) => {this.renderDragDrop(e)}}>Upload Profile Picutre</button>
    //         </div>
    //         <button className="post-button">Post</button>
    //
    //       </div>
    //     </div>
    // </div>
    // <Link to="/jsmap">
    //     <img src={compass} alt="compass" className="compass" />{" "}
    //   </Link>
    // </div>
    return (
      <div className="settings-nav">
        <JSnav />
        <JsMiniMap />
        {modal}
        <div className="main-settings">
          <div className="signout">
            <button className="signoutbutton">Sign Out</button>
          </div>
          <header>Settings</header>
          <div className="settings-container">
            {/* <div className="info-update">
              <h2>Update Contact Information</h2>
              <hr />
              <div className="update-contact">
                <h3>
                  E-mail: <input 
                  type="text"
                  placeholder= "Email"
                  value={this.state.email}
                  />
                </h3>
                <h3 className="phone-input">
                  Phone: <input
                     type="text"
                     placeholder= "Phone"
                     value={this.state.phone}
                  />
                </h3>
              </div>

              <div className="update-password">
                <h2>Update Password</h2>
                <hr />
                <div className="update-pswd">
                  <h3>
                    Old Password: <input
                       type="text"
                       placeholder="Password"
                       value={this.state.oldpassword}
                    />
                  </h3>
                  <h3 className="new-pswd">
                    New Password: <input 
                       type="text"
                       placeholder="New Password"
                       value={this.state.newpassword}
                    />
                  </h3>
                </div>
              </div>
              <button className="save-button">Save</button>
            </div> */}

            <div className="new-joblisting">
              <h2>Profile Information</h2>
              <hr />
              <div className="listing-input">
                <input 
                 name= "city"
                 type="text"
                 value={this.state.city}
                 onChange={e => this.setState({ [e.target.name]: e.target.value })}
                 placeholder="City" />
                <input 
                  name= "state"
                  type="text"
                  value={this.state.state}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                placeholder="State" />
                <input 
                  name= "profession"
                  type="text"
                  value={this.state.profession}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                placeholder="Job Title" />
                <input 
                  name= "about"
                  type="text"
                  value={this.state.about}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                placeholder="BIO" />
                <input 
                  name= "linkedin"
                  type="text"
                  value={this.state.linkedin}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                  placeholder="LinkedIn Profile Link" />
                <input 
                  name= "codepen"
                  type="text"
                  value={this.state.codepen}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                  placeholder="Codepen Profile Link" />
                <input
                  name= "github"
                  type="text"
                  value={this.state.github}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                  placeholder="GitHub Profile Link" />
                <input
                  name= "website"
                  type="text"
                  value={this.state.website}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}                
                placeholder="Portfolio Website Link" />
                <input 
                  name= "twitter"
                  type="text"
                  value={this.state.twitter}
                  onChange={e => this.setState({ [e.target.name]: e.target.value })}
                placeholder="Twitter Link" />
                <button className="post-button-2">Upload Resume PDF</button>
                <button
                  className="post-button-2"
                  onClick={e => {
                    this.renderDragDrop(e);
                  }}
                >
                  Upload Profile Picutre
                </button>
              </div>
              <button onClick={this.submit} className="post-button">Post</button>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { signout, update }
)(StudentSettings);