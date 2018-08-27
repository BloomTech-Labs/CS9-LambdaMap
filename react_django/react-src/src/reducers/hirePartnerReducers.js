// The reducers for Hiring Partners

import {
  FETCH_HPS,
  FETCHED_HPS,
  LOGGEDIN_HPS,
  LOGIN,
  ERROR_ATLOGIN,
  FETCH_HPFAVORITES,
  FETCHED_HPFAVORITES,
  ERROR_FETCHING
} from "../actions";

const initialState = {
  hiring_partners: [],
  hp_favorites: [],
  fetchingHPfavs: false,
  fetchingHPs: false,
  loggingIn: false,
  error: null
};

const hirePartner = (state = initialState, action) => {
  switch (action.type) {
    // Fetching all hiring partners
    case FETCH_HPS:
      return Object.assign({}, state, {
        fetchingHPs: true
      });

    case FETCHED_HPS:
      return Object.assign({}, state, {
        hiring_partners: [...action.payload],
        fetchingHPs: false,
        error: null
      });

    // Logging in Clients
    case LOGIN:
      return Object.assign({}, state, {
        loggingIn: true
      });

    case LOGGEDIN_HPS:
      return Object.assign({}, state, {
        user: action.payload,
        loggingIn: false,
        error: null
      });

    case FETCH_HPFAVORITES:
      return Object.assign({}, state, {
        fetchingHPFavs: true
      });

    case FETCHED_HPFAVORITES:
      return Object.assign({}, state, {
        hp_favorites: [...action.payload],
        fetchingHPFavs: false,
        error: null
      });

    case ERROR_ATLOGIN:
      return Object.assign({}, state, {
        error: action.payload
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

export default hirePartner;
