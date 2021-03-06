'use strict';

import React from 'react';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import ArtistStore from '../../stores/artist-store';
import actions from '../../actions/app-actions';
import {Link} from 'react-router';

function getArtists () {
  return {
    artists: ArtistStore.getArtists()
  }
}

const Artists = (props) => {
  return (
    <div className="col-xs-10">
      <h3>Artists</h3>
      <div className="list-group">
        {
          props.artists.map(artist => {
            return (
              <div key={artist._id} className="list-group-item">
                <Link to={`/artists/${artist._id}`}>{ artist.name }</Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default StoreWatchMixin(Artists, ArtistStore, getArtists, actions.getArtists);
