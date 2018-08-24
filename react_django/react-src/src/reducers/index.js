// still in progress

import { combineReducers } from 'redux';
import jobListing from './jobListingReducers';
import hirePartner from './hirePartnerReducers';
import clients from './clientsReducers';
import hpFavs from './hpFavReducers';
import clientFavs from './clientFavReducers';

const reducers = combineReducers({
  jobListing,
  hirePartner,
  clients,
  hpFavs,
  clientFavs
});

export default reducers;