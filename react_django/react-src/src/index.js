import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/rootReducer'

//  const store = createStore(rootReducer, applyMiddleware(thunk, logger))
// ReactDOM.render(
// <Provider store={store}>
//   <Router>
//     <App />
//   </Router>
// </Provider>,
// document.getElementById('root'));
registerServiceWorker();

// if(module.hot) {
// //add code to accept hot modules
// }
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router} from 'react-router-dom';
// import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import { rootReducer } from './reducers';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// const store = createStore => {}

ReactDOM.render(
    // <Provider store={store}>
    <Router>
        <App />
    </Router>,
    // </Provider>, 
document.getElementById('root'));
