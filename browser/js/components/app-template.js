'use strict';

import React from 'react';
import Sidebar from './sidebar/sidebar';
import Player from './player/player';
import Auth from './auth';

export default (props) => {
  return (
    <div className="container-fluid">
      <Auth>
        <Sidebar></Sidebar>
        <div className="col-xs-10">
          {
            React.Children.map(props.children, child => {
              return React.cloneElement(child, {user: props.user})
            })
          }
        </div>
        <Player></Player>
      </Auth>
    </div>
  );
}
