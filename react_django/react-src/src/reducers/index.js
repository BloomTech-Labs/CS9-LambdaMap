// still in progress

import { FETCH_CLIENTFAVORITES,FETCHED_CLIENTFAVORITES,FETCH_HPFAVORITES,FETCHED_HPFAVORITES,FETCH_HPS, FETCHED_HPS, FETCH_LISTINGS, FETCHED_LISTINGS, FETCH_CLIENTS, FETCHED_CLIENTS, ERROR_FETCHING } from '../actions';

 const initialState = {
   clients: [],
   hiring_partners: [],
   job_listings: [],
   fetchingClients: false,
   fetchingHPs: false,
   fetchingListings: false,
   error: null
 }

export const rootReducer = (state = initialState, action) => {

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

    case FETCH_HPFAVORITES:
      return Object.assign({}, state, { 
        fetchingHPFavorites: true 
    });

    case FETCHED_HPFAVORITES:
      return Object.assign({}, state, {
        hiringPartners: [ ...action.payload ],
        fetchingHPFavorites: false,
        error: null
    });

    case FETCH_CLIENTFAVORITES:
      return Object.assign({}, state, { 
        fetchingHPFavorites: true 
    });

    case FETCHED_CLIENTFAVORITES:
      return Object.assign({}, state, {
        clients: [ ...action.payload ],
        fetchingHPFavorites: false,
        error: null
    });


    case FETCH_HPS:
      return Object.assign({}, state, { 
        fetchingHPs: true 
    });

    case FETCHED_HPS:   
      return Object.assign({}, state, {
        hiring_partners: [ ...action.payload ],
        fetchingHPs: false,
        error: null
    });

    case FETCH_LISTINGS:
      return Object.assign({}, state, { 
        fetchingListings: true 
    });

    case FETCHED_LISTINGS:
      console.log(...action.payload)      
      return Object.assign({}, state, {
        job_listings: [ ...action.payload ],
        fetchingListings: false,
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
