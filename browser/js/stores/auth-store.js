'use strict';

import {EventEmitter} from 'events';
import {register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import StorePrototype from './store-prototype';

let _user = null,
    _error = null;

function _setUser (user=null) {
  _user = user;
}

function _setError (error=null) {
  _error = error;
}

const AuthStore = Object.assign(EventEmitter.prototype, StorePrototype, {

  getUser () {
    return _user;
  },
  getError () {
    return _error;
  },

  dispatcherIndex: register(action => {

    let changed = true;

    switch (action.actionType) {
      case AppConstants.AUTHENTICATE_LOGIN:
        _setUser();
        break;
      case AppConstants.AUTHENTICATION_SUCCEEDED:
        _setUser(action.user);
        _setError();
        break;
      case AppConstants.AUTHENTICATION_FAILED:
        _setUser();
        _setError(action.err.data);
        break;
      case AppConstants.LOGOUT_USER:
        _setUser();
        break;
      default:
        changed = false;
        break;
    }

    if (changed) AuthStore.emitChange();
  })
});

export default AuthStore;
