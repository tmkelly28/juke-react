'use strict'

import React from 'react';
import AlbumStore from '../../stores/album-store';
import StoreWatchMixin from '../../mixins/store-watch-mixin';
import SongList from './song-list';
import AlbumHeader from './album-header';
import actions from '../../actions/app-actions';

function getAlbum () {
  return {
    album: AlbumStore.getAlbum()
  }
}

const Album = (props) => {
  return (
    <div className="album">
      <AlbumHeader album={props.album} />
      <SongList songs={props.album.songs} />
    </div>
  );
}

Album.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default StoreWatchMixin(Album, AlbumStore, getAlbum, actions.getAlbumById);
