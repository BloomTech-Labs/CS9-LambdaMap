// still in progress
import axios from 'axios';
export const FETCHED_CLIENTS = 'FETCHED_CLIENTS';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCHED_HPS = 'FETCHED_HPS';
export const FETCH_HPS = 'FETCH_HPS';
// export const FETCH_USER = 'FETCH_USER';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const get_clients = () => {
  const clients = axios.get(`http://127.0.0.1:8000/api/clients/`);
  return dispatch => {
    dispatch({ type: FETCH_CLIENTS });
    clients
      .then(response => {
          console.log( response.data.Clients );
        dispatch({
          type: FETCHED_CLIENTS,
          payload: response.data.Clients
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: 'ERROR fetching clients'
        });
      });
  };
};

export const get_hiring_partners = () => {
    const hiring_partners = axios.get(`http://127.0.0.1:8000/api/hire-partners/`);
    return dispatch => {
      dispatch({ type: FETCH_HPS });
      hiring_partners
        .then(response => {
            console.log( response.data.Hire_Partners );
          dispatch({
            type: FETCHED_HPS,
            payload: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR_FETCHING,
            payload: 'ERROR fetching hiring partner'
          });
        });
    };
  };
