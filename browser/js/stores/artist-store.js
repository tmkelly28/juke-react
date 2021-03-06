'use strict';

import {EventEmitter} from 'events';
import {register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import StorePrototype from './store-prototype';

let _artists = [],
  _artist = {};

function _setArtists (artists) {
  _artists = artists;
}

function _setArtist (artist) {
  _artist = artist;
}

const ArtistStore = Object.assign(EventEmitter.prototype, StorePrototype, {
  getArtists () {
    return _artists;
  },
  getArtist () {
    return _artist;
  },
  getArtistAlbums () {
    return _artist.albums || [];
  },
  getArtistSongs () {
    return _artist.songs || [];
  },
  dispatcherIndex: register(action => {

    let changed = true;

    switch (action.actionType) {
      case AppConstants.LOADING_ARTISTS:
        _setArtists([])
        break;
      case AppConstants.GET_ARTISTS:
        _setArtists(action.artists);
        break;
      case AppConstants.LOADING_ARTIST:
        _setArtist({})
        break;
      case AppConstants.GET_ARTIST_BY_ID:
        _setArtist(action.artist);
        break;
      default:
        changed = false;
        break;
    }

    if (changed) ArtistStore.emitChange();
  })
});

export default ArtistStore;
