
import React, { Component } from 'react';
import './App.css';
import HPsettings from './settings/HP-settings/HPsettings';
import JSprofile from './jobseeker-profile/JSprofile';
import JSlistView from './list-views/jobseekers-HPview/JSlistView';
import HpProfileView from './HpProfileView/hpProfileView';
import StudentSettings from './settings/studentSettings/studentSettings';	
import MapView from './map/map';
import Billing from './billing/billing';
import LogIn from './landing/LogIn/LogIn';
import Register from './landing/Register/Register'
import compass from './compass.png'
import { Link, Route } from 'react-router-dom';
import hiringPartnerFavorites from './favorites/hiringPartnerFavorites/HPFavorites';	
import JobslistView from "./list-views/jobspage-JSview/JobslistView";
// import HPFavorites from "./favorites/hiringPartnerFavorites/HPFavorites";
// import HpProfileView from "./HpProfileView/hpProfileView";
// import MapView from './map/map';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/jobseekers" component={JSlistView} />
          <Route path="/billing" component={Billing} />
          <Route path="/settings" component={HPsettings} />
          <Route path="/hpprofile"  component={HpProfileView} />
          <Route path="/studentsettings" component={StudentSettings} />
          <Route path="/map" component={MapView} />
          <Route path="/hiringPartnerFavorites" component={hiringPartnerFavorites} />
          <Link to='/map'><img src={compass} alt='compass' className='compass' /> </Link>
          <Route path='/register' component={Register} />
          <Route path='/login' component={LogIn} />
        <Route exact path="/" component={JobslistView} />
        <Route path="/jobseekers" component={JSlistView} />
        <Route path="/billing" component={Billing} />
        <Route path="/settings" component={HPsettings} />
        <Route path="/jsprofile/:id" component={JSprofile} />
        {/* <Route path="/map" component={MapView} /> */}
        {/* <Route path="/favorites/" component={HPFavorites} /> */}
        <Link to="/map">
          <img src={compass} alt="compass" className="compass" />{" "}
        </Link>
      </div>
    );
  }
}

export default App;
