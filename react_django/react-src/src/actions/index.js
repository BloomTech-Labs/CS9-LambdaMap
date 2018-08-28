// still in progress
import axios from "axios";
export const FETCH_CLIENTS = "FETCH_CLIENTS";
export const FETCHED_CLIENTS = "FETCHED_CLIENTS";
export const FETCH_CLIENT = "FETCH_CLIENT";
export const FETCHED_CLIENT = "FETCHED_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const UPDATED_CLIENT = "UPDATED_CLIENT";
export const LOGIN = "LOGIN";
export const LOGGEDIN_CLIENT = "LOGGEDIN_CLIENT";
export const LOGGEDIN_HPS = "LOGGEDIN_HPS";
export const REGISTER = "REGISTER";
export const REGISTERED_CLIENT = "REGISTERED_CLIENT";
export const REGISTERED_HPS = "REGISTERED_HPS";
export const SIGNOUT = "_CLIENT";
export const UPDATE_HP = "UPDATE_HP";
export const UPDATED_HP = "UPDATED_HP";
export const FETCH_HPS = "FETCH_HPS";
export const FETCHED_HPS = "FETCHED_HPS";
export const FETCH_HP = "FETCH_HP";
export const FETCHED_HP = "FETCHED_HP";
export const FETCH_LISTINGS = "FETCH_LISTINGS";
export const FETCHED_LISTINGS = "FETCHED_LISTINGS";
export const FETCH_HPFAVORITES = "FETCH_HIRING_PARTNER_FAVORITES";
export const FETCHED_HPFAVORITES = "FETCHED_HIRING_PARTNER_FAVORITES";
export const FETCH_CLIENTFAVORITES = "FETCH_HIRING_PARTNER_FAVORITES";
export const FETCHED_CLIENTFAVORITES = "FETCHED_HIRING_PARTNER_FAVORITES";
export const ERROR_FETCHING = "ERROR_FETCHING";
export const ERROR_ATLOGIN = "ERROR_ATLOGIN ";

export const login = data => {
  const token = window.sessionStorage.getItem("token") || null;
  const config = { headers: { jwt: `${token}` } };
  const user = axios.post(
    `http://lambda-map.herokuapp/api/login/`,
    data,
    config
  );
  return dispatch => {
    dispatch({
      type: LOGIN
    });
    user
      .then(response => {
        if (response.data.account_type === false) {
          window.sessionStorage.setItem("jwt", response.headers.jwt);
          dispatch({
            type: LOGGEDIN_CLIENT,
            payload: response.data
          });
        } else if (response.data.account_type === true) {
          window.sessionStorage.setItem("jwt", response.headers.jwt);
          dispatch({
            type: LOGGEDIN_HPS,
            payload: response.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: ERROR_ATLOGIN,
          payload: ("ERROR logging in", err)
        });
      });
  };
};

export const register = data => {
  const user = axios.post(`http://127.0.0.1:8000/api/register/`, data);
  return dispatch => {
    dispatch({
      type: REGISTER
    });
    user
      .then(response => {
        if (response.data.account_type === "false") {
          dispatch({
            type: REGISTERED_CLIENT,
            payload: response.data
          });
        } else if (response.data.account_type === "true") {
          dispatch({
            type: REGISTERED_HPS,
            payload: response.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: REGISRATION_ERROR,
          payload: ("ERROR creating account", err)
        });
      });
  };
};

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
          payload: ("ERROR fetching clients", err)
        });
      });
  };
};

export const get_hpFavs = () => {
  const clients = axios.get(
    `http://lambda-map.herokuapp/api/hire-partner-favorites/`
  );
  return dispatch => {
    dispatch({ type: FETCH_HPFAVORITES });
    clients
      .then(response => {
        dispatch({
          type: FETCHED_HPFAVORITES,
          payload: response.data.Hire_Partner
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: "ERROR fetching hire partner favorites"
        });
      });
  };
};

export const get_clientFavs = () => {
  const clientFavs = axios.get(
    `http://lambda-map.herokuapp/api/client-favorites/`
  );
  return dispatch => {
    dispatch({ type: FETCH_CLIENTFAVORITES });
    clientFavs
      .then(response => {
        dispatch({
          type: FETCHED_CLIENTFAVORITES,
          payload: response.data.Client_Favorites
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: "ERROR fetching clients favorites"
        });
      });
  };
};

export const get_hiring_partners = () => {
  const hiring_partners = axios.get(
    `http://lambda-map.herokuapp/api/hire-partners/`
  );
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
          payload: "ERROR fetching hiring partner"
        });
      });
  };
};

export const get_listings = () => {
  const job_listing = axios.get(
    `http://lambda-map.herokuapp/api/job-listings/`
  );
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
          payload: "ERROR fetching job listings"
        });
      });
  };
};

export const get_client = ID => {
  const client = axios.get(`http://lambda-map.herokuapp/api/clients/${ID}/`);
  return dispatch => {
    dispatch({ type: FETCH_CLIENT });
    client
      .then(response => {
        dispatch({
          type: FETCHED_CLIENT,
          payload: response.data.Client
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: "ERROR fetching clients"
        });
      });
  };
};
