// The reducers for Job Listings

import { FETCH_LISTINGS, FETCHED_LISTINGS, ERROR_FETCHING } from '../actions';

const initialState = {
  job_listings: [],
  fetchingListings: false,
  error: null
}

const jobListing = (state = initialState, action) => {

  switch(action.type) {

    case FETCH_LISTINGS:
      return Object.assign({}, state, { 
        fetchingListings: true 
      });

    case FETCHED_LISTINGS:
      console.log(action.payload)      
      return Object.assign({}, state, {
        job_listings: [ ...action.payload ],
        fetchingListings: false,
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

export default jobListing;