// still in progress
import axios from 'axios';
export const FETCHED_USERS = 'FETCHED_USERS';
export const FETCH_USERS = 'FETCH_USERS';
export const ERROR_FETCHING = 'ERROR_FETCHING';

// export const FETCH_USER = 'FETCH_USER';


export const getUsers = () => {
    const users = axios.get(`http://127.0.0.1:8000/api/users/`);
    return dispatch => {
      dispatch({ type: FETCH_USERS });
      users
        .then(response => {
            console.log( response.data );
          dispatch({
            type: FETCHED_USERS,
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR_FETCHING,
            payload: 'ERROR fetching users'
          });
        });
    };
  };

  // export const getuser = id => {
  //   const user = axios.get(`https://lambda-map.herokuapp.com/${id}`)
  //   return dispatch => {
  //   user
  //     .then(response => {
  //       console.log(response.data, "getuser")
  //       dispatch({ type: FETCH_USER, payload: response.data });
  //     })
  //     .catch(error => {
          // dispatchEvent({
            // type: ERROR_FETCHING,
            // payload: 'ERROR fetching users'
  //       console.error(error);
          // });
  //     });
  //   };
  // };
