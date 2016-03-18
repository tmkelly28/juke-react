'use strict';

import React from 'react';
import Sidebar from './sidebar/sidebar';
import Player from './player/player';

export default (props) => {
  return (
    <div className="container-fluid">
      <Sidebar></Sidebar>
      <div className="col-xs-10">
        {props.children}
      </div>
      <Player></Player>
    </div>
  );
}
