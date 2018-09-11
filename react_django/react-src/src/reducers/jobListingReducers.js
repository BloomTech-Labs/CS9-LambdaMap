// The reducers for Job Listings

import * as actions from "../actions/actionTypes";

const initialState = {
  job_listings: [],
  fetchingListings: false,
  error: null
};

const jobListing = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_LISTINGS:
      return Object.assign({}, state, {
        fetchingListings: true
      });

    case actions.FETCHED_LISTINGS:
      console.log(action.payload);
      return Object.assign({}, state, {
        job_listings: [...action.payload],
        fetchingListings: false,
        error: null
      });

    case actions.ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

export default jobListing;
