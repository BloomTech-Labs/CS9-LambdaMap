import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import { rootReducer } from './reducers';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

const store = createStore => {}

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>, 
document.getElementById('root'));