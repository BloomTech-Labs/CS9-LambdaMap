import React, { Component } from "react";
import HPnav from "../../nav/company/HPnav";
import compass from "../../compass.png";
import { Link } from "react-router-dom";
import { create_listing, signout } from "../../../actions/index";
import { connect } from "react-redux";

class HPLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job_title: "",
      job_desc: "",
      job_link: ""
    };
  }

  componentDidMount = () => {
    // this.props.get_listings();
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <HPnav />
        <div className="signout">
          <button
            className="signoutbutton"
            onClick={() => {
              this.props.signout(this.props.history);
            }}
          >
            Sign Out
          </button>
        </div>
        <div>
          <div>
            <h1>HP LANDING PAGE</h1>
          </div>
          <div className="new-joblisting">
            <h2>Add New Job Listing</h2>
            <hr />
            <div className="listing-input">
              <input
                type="text"
                placeholder="Job Title"
                name="job_title"
                className="input"
                value={this.state.job_title}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Job Description"
                name="job_desc"
                className="input"
                value={this.state.job_desc}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <input
                type="url"
                placeholder="Job Link"
                name="job_link"
                className="input"
                value={this.state.job_link}
                onChange={e =>
                  this.setState({ [e.target.name]: e.target.value })
                }
              />
              <div className="remote-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round" />
                </label>
                <a className="remote-pos">Remote Postition</a>
              </div>
            </div>
            <button
              onClick={() => {
                this.props.create_listing({
                  hp_id: this.props.hirePartner.user.id,
                  job_title: this.state.job_title,
                  job_desc: this.state.job_desc,
                  job_link: this.state.job_link
                });
                this.setState({
                  job_title: "",
                  job_desc: "",
                  job_link: ""
                });
              }}
            >
              Post
            </button>
          </div>
        </div>
        
        {/* Delete listing Functionality */}
        {/* <button
          onClick={() => {
            this.props.delete_listing(jls.pk);
            console.log(jls);
          }}
        >
          Delete
        </button> */}

        <Link to="/hpmap">
          <img src={compass} alt="compass" className="compass" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, "mapstatetoprops");
  return {
    jobListing: state.jobListing,
    hirePartner: state.hirePartner,
    // fetchingListings: state.fetchingListings,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { create_listing, signout }
)(HPLanding);
