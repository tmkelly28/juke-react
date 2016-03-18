'use strict';

import React from 'react';
import ArtistViewController from '../../mixins/artist-vs-mixin';
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
    <div>
      <h3>{ props.artist.name }</h3>
      <ul className="nav nav-tabs">
        <li>
          <Link to={`/artists/${props.artist._id}/albums`}>ALBUMS</Link>
        </li>
        <li>
          <Link to={`/artists/${props.artist._id}/songs`}>SONGS</Link>
        </li>
      </ul>
      {props.children}
    </div>
  );
}

export default ArtistViewController(Artist, getArtist, actions.getArtistById);
