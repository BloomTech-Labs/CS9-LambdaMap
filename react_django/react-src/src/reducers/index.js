// // still in progress

// import { FETCH_USERS, FETCHED_USERS, ERROR_FETCHING, FETCH_USER } from '../actions';

//  const initialState = {
//    users: [],
//    user: {},
//    firstName: '',
//    lastName = '',
//    state = '',
//    city = '',
//    bio = '',
//    email = '',
//    number = '',
//    remote = false,
//    relocate = false,
//    linkedin = '',
//    github = '',
//    twitter = '',
//    codepen = '',
//    employerName = '',
//    fetchingUsers: false,
//    fetchUser: false,
//    error: null
//  }

// export const rootReducer = (state = initialState, action) => {

//   switch(action.type) {

//       case FETCH_USERS:
//         return Object.assign({}, state, { 
//           fetchingUsers: true 
//       });

//       case FETCHED_USERS:
//         return Object.assign({}, state, {
//           users: [ ...action.payload ],
//           fetchingUsers: false,
//           error: null
//       });
      
//       case FETCH_USER:
//         return Object.assign({}, state, {
//           user: action.payload , 
//           fetchuser: true });

//       case ERROR_FETCHING:
//         return Object.assign({}, state, {
//           error: action.payload,
//       });

//       default:
//         return state;
//     }
// };

// export default rootReducer;