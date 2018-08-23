// still in progress
import axios from 'axios';
export const FETCHED_CLIENTS = 'FETCHED_CLIENTS';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCHED_HPS = 'FETCHED_HPS';
export const FETCH_HPS = 'FETCH_HPS';
export const FETCHED_LISTINGS = 'FETCHED_LISTINGS';
export const FETCH_LISTINGS = 'FETCH_LISTINGS';
// export const FETCH_USER = 'FETCH_USER';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const FETCH_HPFAVORITES = "FETCH_HIRING_PARTNER_FAVORITES";
export const FETCHED_HPFAVORITES = "FETCHED_HIRING_PARTNER_FAVORITES";
export const FETCH_CLIENTFAVORITES = "FETCH_HIRING_PARTNER_FAVORITES";
export const FETCHED_CLIENTFAVORITES = "FETCHED_HIRING_PARTNER_FAVORITES";



export const get_clients = () => {
  const clients = axios.get(`http://127.0.0.1:8000/api/clients/`);
  return dispatch => {
    dispatch({ type: FETCH_CLIENTS });
    clients
      .then(response => {
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

export const get_hiring_partner_favorites= () => {
  const clients = axios.get(`http://127.0.0.1:8000/api/hire-partner-favorites/`);
  return dispatch => {
    dispatch({ type: FETCH_HPFAVORITES});
    clients
      .then(response => {
        dispatch({
          type: FETCHED_HPFAVORITES,
          payload: response.data.hirePartners
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

export const get_client_favorites = () => {
  const clients = axios.get(`http://127.0.0.1:8000/api/client-favorites/`);
  return dispatch => {
    dispatch({ type: FETCH_CLIENTFAVORITES});
    clients
      .then(response => {
        dispatch({
          type: FETCHED_CLIENTFAVORITES,
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
          dispatch({
            type: FETCHED_HPS,
            payload: response.data.Hire_Partners
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

export const get_listings = () => {
    const job_listing = axios.get(`http://127.0.0.1:8000/api/job-listings/`);
    return dispatch => {
      dispatch({ type: FETCH_LISTINGS });
      job_listing
        .then(response => {
          dispatch({
            type: FETCHED_LISTINGS,
            payload: response.data.HPjobListings
          });
        })
        .catch(err => {
          dispatch({
            type: ERROR_FETCHING,
            payload: 'ERROR fetching job listings'
          });
        });
    };
  };
