'use strict';

import React from 'react';
import actions from '../actions/auth-actions';
import StoreWatchMixin from '../mixins/store-watch-mixin';
import AuthStore from '../stores/auth-store';

function getSession () {
  return {
    user: AuthStore.getUser()
  }
}

const Auth = (props) => {
  return (
    <div>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {user: props.user})
        })
      }
    </div>
  );
}

export default StoreWatchMixin(Auth, AuthStore, getSession, actions.getSession);
