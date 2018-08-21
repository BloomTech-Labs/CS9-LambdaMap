// still in progress

import { FETCH_HPS, FETCHED_HPS, FETCH_CLIENTS, FETCHED_CLIENTS, ERROR_FETCHING } from '../actions';

 const initialState = {
   clients: [],
   hiring_partners: [],
   fetchingClients: false,
   fetchingHPs: false,
   error: null
 }

export const rootReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case FETCH_CLIENTS:
      return Object.assign({}, state, { 
        fetchingClients: true 
    });

    case FETCHED_CLIENTS:
      console.log(...action.payload)      
      return Object.assign({}, state, {
        clients: [ ...action.payload ],
        fetchingClients: false,
        error: null
    });

    case FETCH_HPS:
      return Object.assign({}, state, { 
        fetchingHPs: true 
    });

    case FETCHED_HPS:
      console.log(...action.payload)      
      return Object.assign({}, state, {
        hiring_partners: [ ...action.payload ],
        fetchingHPs: false,
        error: null
    });

    // case FETCH_USER:
    //   return Object.assign({}, state, {
    //     user: action.payload , 
    //     fetchuser: true });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    default:
      return state;
  }
};

export default rootReducer;