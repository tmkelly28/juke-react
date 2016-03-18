'use strict';

import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  return (
    <div className="col-xs-4">
      <div className="thumbnail">
        <img src={props.album.imageUrl} />
        <div className="caption">
          <h5>
            <Link to={`/albums/${props.album._id}`}>{ props.album.name }</Link>
          </h5>
          <small>{props.album.songs.length} songs</small>
        </div>
      </div>
    </div>
  );
}
