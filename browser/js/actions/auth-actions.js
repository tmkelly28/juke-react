'use strict';

import AppConstants from '../constants/app-constants';
import axios from 'axios';
import {dispatch} from '../dispatchers/app-dispatcher';
import {browserHistory} from 'react-router';

const toUser = (res) => res.data.user;
const toAlbums = () => browserHistory.push('/albums');
const toLogin = () => browserHistory.push('/login');
const authSucceeded = (user) => dispatch({
  actionType: AppConstants.AUTHENTICATION_SUCCEEDED,
  user
});
const authFailed = (err) => dispatch({
  actionType: AppConstants.AUTHENTICATION_FAILED,
  err
});

export default {
  login (credentials) {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN});
    return axios.post('/login', credentials)
      .then(toUser)
      .then(authSucceeded)
      .then(toAlbums)
      .catch(authFailed);
  },
  signup (credentials) {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN})
    return axios.post('/signup', credentials)
      .then(toUser)
      .then(authSucceeded)
      .then(toAlbums)
      .catch(authFailed);
  },
  getSession () {
    dispatch({actionType: AppConstants.AUTHENTICATE_LOGIN})
    return axios.get('/session')
      .then(toUser)
      .then(authSucceeded)
      .catch(authFailed);
  },
  logout () {
    dispatch({actionType: AppConstants.LOGOUT_USER})
    return axios.get('/logout')
      .then(toLogin);
  }

}
