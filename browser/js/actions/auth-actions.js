'use strict';

import AppConstants from '../constants/app-constants';
import axios from 'axios';
import {dispatch} from '../dispatchers/app-dispatcher';

export default {
  login (credentials) {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN});
    return axios.post('/login', credentials)
      .then(res => res.data.user)
      .then(user => dispatch({
        actionType: AppConstants.AUTHENTICATION_SUCCEEDED,
        user
      }))
      .catch(err => dispatch({
        actionType: AppConstants.AUTHENTICATION_FAILED,
        err
      }));
  },
  signup (credentials) {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN})
    return axios.post('/signup', credentials)
      .then(res => res.data.user)
      .then(user => dispatch({
        actionType: AppConstants.AUTHENTICATION_SUCCEEDED,
        user
      }))
      .catch(err => dispatch({
        actionType: AppConstants.AUTHENTICATION_FAILED,
        err
      }));
  },
  getSession () {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN})
    return axios.get('/session')
      .then(res => res.data.user)
      .then(user => dispatch({
        actionType: AppConstants.AUTHENTICATION_SUCCEEDED,
        user
      }))
      .catch(err => dispatch({
        actionType: AppConstants.AUTHENTICATION_FAILED,
        err
      }));
  },
  logout () {
    dispatch({actionType: AppConstants.LOGOUT_USER})
    return axios.get('/logout')
      .catch(console.error);
  }

}
