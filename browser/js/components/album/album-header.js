'use strict';

import React from 'react';

function generateMailTo () {}

export default (props) => {
  return (
    <div>
      <h3>{props.album.name}
        <a onClick={generateMailTo}>
          <button className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-share"></span>
          </button>
        </a>
      </h3>
      <img src={props.album.imageUrl} className="img-thumbnail" />
    </div>
  );
}
