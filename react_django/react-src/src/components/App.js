import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import compass from "./compass.png";
import JSprofile from "./jobseeker-profile/JSprofile";
import MainLanding from "./landing-page/main-landing/MainLanding";
import ClientLanding from "./landing-page/client-landing/ClientLanding";
import HPlanding from "./landing-page/hp-landing/HPlanding";
import HPMapView from "./map/hp-map/hpmap";
import JSMapView from "./map/client-map/jsmap";
import JSlistView from "./list-views/jobseekers-HPview/JSlistView";
import HPsettings from "./settings/HP-settings/HPsettings";
import SignUp from "./landing-page/Sign-up/SignUp";
import studentSettings from "./settings/studentSettings/studentSettings";
import JobslistView from "./list-views/jobspage-JSview/JobslistView";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainLanding} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/jslanding/" component={ClientLanding} />
        <Route path="/hplanding/" component={HPlanding}/>
        <Route path="/jsmap/" component={JSMapView} />
        <Route path="/hpmap/" component={HPMapView} />
        <Route path="/jobseekers/" component={JSlistView} />
        <Route path="/jobslist/" component={JobslistView} />
        <Route path="/jsprofile/:id/" component={JSprofile} />
        {/* <Route path="/favorites/" component={} /> */}
        {/* <Route path="/messages/" component={} /> */}
        <Route path="/hpsettings/" component={HPsettings} />
        <Route path="/jssettings/" component={studentSettings} />
        {/* <Route path="/billing" component={} /> */}

        <Link to="/map">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
      </div>
    );
  }
}

export default App;
