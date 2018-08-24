// The reducers for Hiring Partners

import { FETCH_HPS, FETCHED_HPS, ERROR_FETCHING } from '../actions';

const initialState = {
  hiring_partners: [],
  fetchingHPs: false,
  error: null
}

const hirePartner = (state = initialState, action) => {

  switch(action.type) {

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

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
    });

    default:
      return state;
  }
};

export default hirePartner;
