import React, { Component } from 'react';
import './App.css';
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile'
import { Route } from 'react-router-dom';


class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/settings" component={HPsettings} />
      </div>
    );
  }
}

export default App;
