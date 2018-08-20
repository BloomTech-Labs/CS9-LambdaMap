// still in progress

import { FETCH_USERS, FETCHED_USERS, ERROR_FETCHING } from '../actions';

 const initialState = {
   users: [],
   fetchingUsers: false,
   error: null
  //  user: {},
 }

export const rootReducer = (state = initialState, action) => {

  switch(action.type) {

      case FETCH_USERS:
        return Object.assign({}, state, { 
          fetchingUsers: true 
      });

      case FETCHED_USERS:
      console.log(action.payload)      
        return Object.assign({}, state, {
          users: [ ...action.payload.users ],
          fetchingUsers: false,
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