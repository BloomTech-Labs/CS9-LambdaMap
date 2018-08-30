// still in progress
import axios from "axios";
import * as actions from "./actionTypes";

export const login = data => {
  const token = window.sessionStorage.getItem("token") || null;
  const config = { headers: { jwt: `${token}` } };
  const user = axios.post(`https://lambda-map.herokuapp.com/api/login/`, data, config);
  return dispatch => {
    dispatch({
      type: actions.LOGIN
    });
    user
      .then(response => {
        if (response.data.account_type === false) {
          window.sessionStorage.setItem("jwt", response.headers.jwt);
          dispatch({
            type: actions.LOGGEDIN_CLIENT,
            payload: response.data
          });
        } else if (response.data.account_type === true) {
          window.sessionStorage.setItem("jwt", response.headers.jwt);
          dispatch({
            type: actions.LOGGEDIN_HPS,
            payload: response.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_ATLOGIN,
          payload: ("ERROR logging in", err)
        });
      });
  };
};

export const register = data => {
  const user = axios.post(`https://lambda-map.herokuapp.com/api/register/`, data);
  return dispatch => {
    dispatch({
      type: actions.REGISTER
    });
    user
      .then(response => {
        if (response.data.account_type === "false") {
          dispatch({
            type: actions.REGISTERED_CLIENT,
            payload: response.data
          });
        } else if (response.data.account_type === "true") {
          dispatch({
            type: actions.REGISTERED_HPS,
            payload: response.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: actions.REGISRATION_ERROR,
          payload: ("ERROR creating account", err)
        });
      });
  };
};

export const signout = () => {
  const token = window.sessionStorage.getItem("token") || null;
  const config = { headers: { jwt: `${token}` } };
  const user = axios.get(`https://www.lambda-map.herokuapp.com/api/log-out/`, config);
  return dispatch => {
    dispatch({
      type: actions.SIGNOUT
    });
    user
      .then(response => {
        window.sessionStorage.removeItem("token");
        dispatch({
          type: actions.SIGNOUT,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: actions.SIGNOUT_ERROR,
          payload: ("ERROR signout", err)
        });
      });
  };
};

export const get_clients = () => {
  const clients = axios.get(`https://www.lambda-map.herokuapp.com/api/clients/`);
  return dispatch => {
    dispatch({ type: actions.FETCH_CLIENTS });
    clients
      .then(response => {
        dispatch({
          type: actions.FETCHED_CLIENTS,
          payload: response.data.Clients
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: ("ERROR fetching clients", err)
        });
      });
  };
};

export const get_hpFavs = () => {
  const clients = axios.get(
    `https://www.lambda-map.herokuapp.com/api/hire-partner-favorites/`
  );
  return dispatch => {
    dispatch({ type: actions.FETCH_HPFAVORITES });
    clients
      .then(response => {
        dispatch({
          type: actions.FETCHED_HPFAVORITES,
          payload: response.data.Hire_Partner
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: "ERROR fetching hire partner favorites"
        });
      });
  };
};

export const get_clientFavs = () => {
  const clientFavs = axios.get(`https://www.lambda-map.herokuapp.com/api/client-favorites/`);
  return dispatch => {
    dispatch({ type: actions.FETCH_CLIENTFAVORITES });
    clientFavs
      .then(response => {
        dispatch({
          type: actions.FETCHED_CLIENTFAVORITES,
          payload: response.data.Client_Favorites
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: "ERROR fetching clients favorites"
        });
      });
  };
};

export const get_hiring_partners = () => {
  const hiring_partners = axios.get(`https://www.lambda-map.herokuapp.com/api/hire-partners/`);
  return dispatch => {
    dispatch({ type: actions.FETCH_HPS });
    hiring_partners
      .then(response => {
        dispatch({
          type: actions.FETCHED_HPS,
          payload: response.data.Hire_Partners
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: "ERROR fetching hiring partner"
        });
      });
  };
};

export const get_listings = () => {
  const job_listing = axios.get(`https://www.lambda-map.herokuapp.com/api/job-listings/`);
  return dispatch => {
    dispatch({ type: actions.FETCH_LISTINGS });
    job_listing
      .then(response => {
        dispatch({
          type: actions.FETCHED_LISTINGS,
          payload: response.data.HPjobListings
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: "ERROR fetching job listings"
        });
      });
  };
};

export const get_client = ID => {
  const client = axios.get(`https://www.lambda-map.herokuapp.com/api/clients/${ID}/`);
  return dispatch => {
    dispatch({ type: actions.FETCH_CLIENT });
    client
      .then(response => {
        dispatch({
          type: actions.FETCHED_CLIENT,
          payload: response.data.Client
        });
      })
      .catch(err => {
        dispatch({
          type: actions.ERROR_FETCHING,
          payload: "ERROR fetching clients"
        });
      });
  };
};

// export const update = data => {
//   const token = window.sessionStorage.getItem("token") || null;
//   const config = { headers: { jwt: `${token}` } };
//   const user = axios.post(`https://www.lambda-map.herokuapp.com/api/update/`, data, config);
//   return dispatch => {
//     dispatch({
//       type: actions.UPDATE
//     });
//     user
//       .then(response => {
//         if (response.data.account_type === false) {
//           window.sessionStorage.setItem("jwt", response.headers.jwt);
//           dispatch({
//             type: actions.UPDATED_CLIENT,
//             payload: response.data
//           });
//         } else if (response.data.account_type === true) {
//           window.sessionStorage.setItem("jwt", response.headers.jwt);
//           dispatch({
//             type: actions.UPDATED_HPS,
//             payload: response.data
//           });
//         }
//       })
//       .catch(err => {
//         dispatch({
//           type: actions.ERROR_UPDATING,
//           payload: ("ERROR logging in", err)
//         });
//       });
//   };
// };
