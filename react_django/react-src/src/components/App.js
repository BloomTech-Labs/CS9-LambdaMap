import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HPsettings from "./settings/HP-settings/HPsettings";
import JSlistView from "./list-views/jobseekers-HPview/JSlistView";
import JSprofile from "./jobseeker-profile/JSprofile";
import Billing from "./billing/billing";
import compass from "./compass.png";
import { Link } from "react-router-dom";
// import JobslistView from "./list-views/jobspage-JSview/JobslistView";
import HPFavorites from "./favorites/hiringPartnerFavorites/HPFavorites";
import HpProfileView from "./HpProfileView/hpProfileView";
import MapView from "./map/map";
import MainLanding from "./landing-page/main-landing/MainLanding";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainLanding} />
        <Route path="/jobseekers" component={JSlistView} />
        <Route path="/billing" component={Billing} />
        <Route path="/settings" component={HPsettings} />
        <Route path="/jsprofile/:id" component={JSprofile} />
        <Route path="/map" component={MapView} />
        <Route path="/favorites/" component={HPFavorites} />
        <Route path="/hpprofile" component={HpProfileView} />
        <Link to="/map">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
      </div>
    );
  }
}

export default App;
