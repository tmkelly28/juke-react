'use strict';

import React from 'react';

export default (props) => {
  return (
    <div>
      <h3>{props.album.name}</h3>
      <img src={props.album.imageUrl} className="img-thumbnail" />
    </div>
  );
}
