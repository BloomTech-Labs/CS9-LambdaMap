// The reducer for clients

import {
  FETCH_CLIENTS,
  FETCHED_CLIENTS,
  FETCH_CLIENT,
  FETCHED_CLIENT,
  ERROR_FETCHING
} from "../actions";

const initialState = {
  clients: [],
  fetchingClients: false,
  client: {},
  fetchingClient: false,
  error: null
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    // Fetching all clients
    case FETCH_CLIENTS:
      return Object.assign({}, state, {
        fetchingClients: true
      });

    case FETCHED_CLIENTS:
      return Object.assign({}, state, {
        clients: [...action.payload],
        fetchingClients: false,
        error: null
      });

    // Fetching individual client profile
    case FETCH_CLIENT:
      return Object.assign({}, state, {
        fetchingClient: false
      });

    case FETCHED_CLIENT:
      return Object.assign({}, state, {
        client: action.payload,
        fetchingClient: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

export default clients;