'use strict';

import React from 'react';
import Sidebar from './sidebar/sidebar';
import Player from './player/player';
import Auth from './auth';

export default (props) => {
  return (
    <div className="container-fluid">
      <Auth>
        <Sidebar />
        {props.children}
        <Player />
      </Auth>
    </div>
  );
}
