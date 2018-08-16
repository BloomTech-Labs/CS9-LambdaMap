
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/landing/signUp';
import SignIn from './components/landing/signIn';
require('dotenv').config();
// import SignIn from './components/landing/signIn';

// import { Provider } from 'react-redux';

import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HPsettings from './components/settings/HP-settings/HPsettings';
import JSprofile from './components/jobseeker-profile/JSprofile'
import JSlistView from './components/list-views/jobseekers-HPview/JSlistView';

// Currently only routing through the Hiring Partners view


class App extends Component {
 
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={JSprofile} />
          <Route path="/jobseekers" component={JSlistView} />
          <Route path="/settings" component={HPsettings} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={SignIn}/>
      </div>
    );
  }
}


export default App;



// class App extends Component {
//   render() {
//     return (
//       <div>
//         <SignIn />
// {/* ======= */}
{/* // import HPnav from './components/nav/company/HPnav'*/}

export default App;

