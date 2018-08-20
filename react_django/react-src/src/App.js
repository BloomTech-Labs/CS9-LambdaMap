import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile'
import JSlistView from './components/list-views/jobseekers-HPview/JSlistView';
import HpProfileView from './components/hpProfileView/hpProfileView';
import StudentSettings from './components/settings/studentSettings/studentSettings';
// Currently only routing through the Hiring Partners view

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/jobseekers" component={JSlistView} />
          <Route path="/settings" component={HPsettings} />
          <Route path="/hpprofile"  component={HpProfileView} />
          <Route path="/studentsettings" component={StudentSettings} />
      </div>
    );
  }
}

export default App;