import React, { Component } from "react";
import HPnav from "../../nav/company/HPnav";
import compass from "../../compass.png";
import { Link } from 'react-router-dom';


class HPLanding extends Component {
  render() {
    return (
      <div>
        <HPnav />
        <div>
          <div>
            <h1>HP LANDING PAGE</h1>
          </div>
        </div>
        <Link to="/hpmap">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
      </div>
    );
  }
}

export default HPLanding;
