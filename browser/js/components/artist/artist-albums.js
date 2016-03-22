'use strict';

import React from 'react';
import AlbumCard from '../albums/album-card';
import ArtistStore from '../../stores/artist-store';

export default (props) => {

  return (
    <div>
      <h4>ALBUMS</h4>
      <div className="row">
        {
          props.artist.albums ? props.artist.albums.map(album => {
            return <AlbumCard key={album._id} album={album} />
          }) : null
        }
      </div>
    </div>
  );
}
