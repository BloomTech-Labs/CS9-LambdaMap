import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BroweserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducers/index.js'

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))
ReactDOM.render(
<Provider>
  <Router>
    <App />
  </Router>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
