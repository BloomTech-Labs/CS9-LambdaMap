// Clients Reducers

import {
  FETCH_CLIENTS,
  FETCHED_CLIENTS,
  FETCH_CLIENT,
  FETCHED_CLIENT,
  UPDATE_CLIENT,
  UPDATED_CLIENT,
  LOGGEDIN_CLIENT,
  LOGIN,
  REGISTERED_CLIENT,
  REGISTER,
  ERROR_FETCHING,
  FETCH_CLIENTFAVORITES,
  FETCHED_CLIENTFAVORITES,
  ERROR_ATLOGIN,
  REGISRATION_ERROR
} from "../actions";

const initialState = {
  clients: [],
  client: {},
  client_favorites: [],
  fetchingClientFavs: false,
  fetchingClients: false,
  fetchingClient: false,
  updatingClient: false,
  loggingIn: false,
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
        fetchingClient: true
      });

    case FETCHED_CLIENT:
      return Object.assign({}, state, {
        client: action.payload,
        fetchingClient: false,
        error: null
      });

    // Logging in Clients
    case LOGIN:
      return Object.assign({}, state, {
        loggingIn: true
      });

    case LOGGEDIN_CLIENT:
      return Object.assign({}, state, {
        user: action.payload,
        loggingIn: false,
        error: null
      });

    // Registering Clients
    case REGISTER:
      return Object.assign({}, state, {
        registering: true
      });

    case REGISTERED_CLIENT:
      return Object.assign({}, state, {
        user: action.payload,
        registering: false,
        error: null
      });

    case ERROR_ATLOGIN:
      return Object.assign({}, state, {
        error: action.payload
      });

    case UPDATE_CLIENT:
      return Object.assign({}, state, {
        updatingClient: true
      });

    case UPDATED_CLIENT:
      return Object.assign({}, state, {
        client: action.payload,
        updatingClient: false,
        error: null
      });

    case FETCH_CLIENTFAVORITES:
      return Object.assign({}, state, {
        fetchingClientFavs: true
      });

    case FETCHED_CLIENTFAVORITES:
      return Object.assign({}, state, {
        client_favorites: [...action.payload],
        fetchingClientFavs: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload
      });

    case REGISRATION_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });

    default:
      return state;
  }
};

export default clients;
