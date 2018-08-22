import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './settings/HP-settings/HPsettings';
import JSprofile from './jobseeker-profile/JSprofile';
import JSlistView from './list-views/jobseekers-HPview/JSlistView';
import HpProfileView from './HpProfileView/hpProfileView';
import StudentSettings from './settings/studentSettings/studentSettings';	
import MapView from './map/map';
import Billing from './billing/billing';
import compass from './compass.png'
import { Link } from 'react-router-dom';

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
           <Link to='/map'><img src={compass} alt='compass' className='compass' /> </Link>
      </div>
    );
  }
}

export default App;
