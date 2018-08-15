import React, { Component } from 'react';
import './App.css';

import SignIn from './components/landing/signIn';
import { Provider } from 'react-redux';
require('dotenv').config()
class App extends Component {
  render() {
    return (
      <div>
        <SignIn />
{/* ======= */}
{/* // import HPnav from './components/nav/company/HPnav'
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile'
import { Route } from 'react-router-dom'; */}


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
