import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile'
import SignUp from './components/landing/Register';
import JSlistView from './components/list-views/jobseekers-HPview/JSlistView';
import Login from './components/landing/Login';
import Register from './components/landing/Register';
// Currently only routing through the Hiring Partners view

class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/jobseekers" component={JSlistView} />
          <Route path="/settings" component={HPsettings} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;