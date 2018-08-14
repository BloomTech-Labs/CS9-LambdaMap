import { ERROR, SUBMITTED, SUBMITTING, CURRENT_USER, EMPLOYER, SEEKER, LOADING, LOADED } from '../actions/landing/index'

const initialState = {
  error: false,
  submitted: false,
  submitting: false,
  currentUser: null,
  employer: false,
  seeker: false,
  loading: false,
  loaded: false,
  picturePath: '',
}

/*
write the actions for the page
loading animations
loading end
loading start
error = { loading, submission, }
visibilityFilter: 

*/ 

export default (state=initialState, action) => {
  switch(action.type) {
    case ERROR:
    return(
      somelongfuntion()
      for (key in error) {

      }

    )
    default:
    return state;
  }
}