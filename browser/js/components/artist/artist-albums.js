'use strict';

import React from 'react';
import AlbumCard from '../albums/album-card';
import ArtistStore from '../../stores/artist-store';

export default (props) => {
  let albums = ArtistStore.getArtistAlbums();

  return (
    <div>
      <h4>ALBUMS</h4>
      <div className="row">
        {
          albums.map(album => {
            return <AlbumCard key={album._id} album={album} />
          })
        }
      </div>
    </div>
  );
}
