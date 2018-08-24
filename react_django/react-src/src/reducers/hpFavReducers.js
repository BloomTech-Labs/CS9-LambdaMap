// Client favorites reducers

import { FETCH_HPFAVORITES, FETCHED_HPFAVORITES, ERROR_FETCHING } from '../actions';

 const initialState = {
   hp_favorites: [],
   fetchingHPfavs: false,
   error: null
 }

export default (state = initialState, action) => {

  switch(action.type) {

    case FETCH_HPFAVORITES:
      return Object.assign({}, state, { 
        fetchingHPFavs: true 
    });

    case FETCHED_HPFAVORITES:
      return Object.assign({}, state, {
        hp_favorites: [ ...action.payload ],
        fetchingHPFavs: false,
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