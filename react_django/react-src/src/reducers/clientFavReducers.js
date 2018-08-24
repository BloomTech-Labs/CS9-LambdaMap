// Client favorites reducers

import { FETCH_CLIENTFAVORITES, FETCHED_CLIENTFAVORITES, ERROR_FETCHING } from '../actions';

 const initialState = {
   client_favorites: [],
   fetchingClientFavs: false,
   error: null
 }

export default (state = initialState, action) => {

  switch(action.type) {

    case FETCH_CLIENTFAVORITES:
      return Object.assign({}, state, { 
        fetchingClientFavs: true 
    });

    case FETCHED_CLIENTFAVORITES:
      return Object.assign({}, state, {
        client_favorites: [ ...action.payload ],
        fetchingClientFavs: false,
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