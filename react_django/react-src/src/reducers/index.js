// still in progress

import { FETCH_HP, FETCHED_HP, FETCH_CLIENTS, FETCHED_CLIENTS, ERROR_FETCHING } from '../actions';

 const initialState = {
   clients: [],
   fetchingClients: false,
   error: null
  //  hiring_partner: [],
  //  fetchingHPs: false,
  //  user: {},
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

    // case FETCH_HP:
    //   return Object.assign({}, state, { 
    //     fetchingHPs: true 
    // });

    // case FETCHED_HP:
    // console.log(action.payload)      
    //   return Object.assign({}, state, {
    //     hiring_partner: [ ...action.payload.hiring_partner ],
    //     fetchingHPs: false,
    //     error: null
    // });
      
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