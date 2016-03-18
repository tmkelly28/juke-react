'use strict';

import {EventEmitter} from 'events';
import {register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

const CHANGE_EVENT = 'change';
let _albums = [],
  _album = {
  songs: []
};

function _setAlbums (albums) {
  _albums = albums;
}

function _setAlbum (album) {
  _album = album;
}

const AlbumStore = Object.assign(EventEmitter.prototype, {
  emitChange () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getAlbums () {
    return _albums;
  },
  getAlbum () {
    return _album;
  },
  dispatcherIndex: register(action => {

    let changed = true;

    switch(action.actionType) {
      case AppConstants.LOADING_ALBUMS:
        _setAlbums([]);
        break;
      case AppConstants.GET_ALBUMS:
        _setAlbums(action.albums);
        break;
      case AppConstants.LOADING_ALBUM:
        _setAlbum({ songs: [] });
        break;
      case AppConstants.GET_ALBUM_BY_ID:
        _setAlbum(action.album);
        break;
      default:
        changed = false;
        break;
    }

    if (changed) AlbumStore.emitChange();
  })
});

export default AlbumStore;
