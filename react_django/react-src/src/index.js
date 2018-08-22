import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import {Elements, StripeProvider} from 'react-stripe-elements';

const store = createStore( rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
    <Elements>
        <App />
        </Elements>
        </StripeProvider>
    </Router>
    </Provider>, 
document.getElementById('root'));