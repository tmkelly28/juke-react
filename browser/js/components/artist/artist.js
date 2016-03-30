'use strict';

import React from 'react';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import ArtistStore from '../../stores/artist-store';
import actions from '../../actions/app-actions';
import {Link} from 'react-router';

function getArtist () {
  return {
    artist: ArtistStore.getArtist()
  }
}

const Artist = (props) => {
  return (
    <div className="col-xs-10">
      <h3>{ props.artist.name }</h3>
      <ul className="nav nav-tabs">
        <li>
          <Link to={`/artists/${props.artist._id}/albums`}>ALBUMS</Link>
        </li>
        <li>
          <Link to={`/artists/${props.artist._id}/songs`}>SONGS</Link>
        </li>
      </ul>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {artist: props.artist})
        })
      }
    </div>
  );
}

export default StoreWatchMixin(Artist, ArtistStore, getArtist, actions.getArtistById);
