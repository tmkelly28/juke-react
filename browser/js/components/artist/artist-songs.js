'use strict';

import React from 'react';
import SongList from '../song-list/song-list';
import ArtistStore from '../../stores/artist-store';

export default (props) => {
  let songs = ArtistStore.getArtistSongs();

  return (
    <div>
      <h4>SONGS</h4>
      <SongList songs={songs} />
    </div>
  );
}
