'use strict';

import React from 'react';
import SongList from '../song-list/song-list';
import ArtistStore from '../../stores/artist-store';

export default (props) => {
  return (
    <div>
      <h4>SONGS</h4>
      <SongList songs={props.artist.songs} />
    </div>
  );
}
