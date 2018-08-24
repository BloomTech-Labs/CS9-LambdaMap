// The reducer for clients

import { FETCH_CLIENTS, FETCHED_CLIENTS, ERROR_FETCHING } from '../actions';

 const initialState = {
   clients: [],
   fetchingClients: false,
   error: null
 }

const clients = (state = initialState, action) => {

  switch(action.type) {
    
    case FETCH_CLIENTS:
      return Object.assign({}, state, { 
        fetchingClients: true 
    });

    case FETCHED_CLIENTS:    
      return Object.assign({}, state, {
        clients: [ ...action.payload ],
        fetchingClients: false,
        error: null
    });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    default:
      return state;
  }
};

export default clients;