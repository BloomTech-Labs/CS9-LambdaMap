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
      </div>
    );
  }
}

export default App;
