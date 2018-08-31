import React, { Component } from "react";
import JSnav from "../../nav/job-seeker/JSnav";
import compass from "../../compass.png";
import { Link } from 'react-router-dom';

class ClientLanding extends Component {
  render() {
    return (
      <div>
        <JSnav />
        <div>
          <div>
            <h1>CLIENT LANDING PAGE</h1>
          </div>
          <Link to="/jsmap">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
        </div>
      </div>
    );
  }
}

export default ClientLanding;
