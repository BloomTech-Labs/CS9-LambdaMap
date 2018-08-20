import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './settings/HP-settings/HPsettings';
import JSprofile from './jobseeker-profile/JSprofile';
// import StudentSettings from './HPprofile/hpProfileView'
import JSlistView from './list-views/jobseekers-HPview/JSlistView';


class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/jobseekers" component={JSlistView} />
          <Route path="/settings" component={HPsettings} />
      </div>
    );
  }
}

export default App;
