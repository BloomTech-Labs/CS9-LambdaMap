import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './settings/HP-settings/HPsettings';
import JSprofile from './jobseeker-profile/JSprofile';
import JSlistView from './list-views/jobseekers-HPview/JSlistView';
import HpProfileView from './components/hpProfileView/hpProfileView';
import StudentSettings from './components/student/studentSettings/studentSettings';	
import StudentSettings from './components/settings/studentSettings/studentSettings';


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
