'use strict';

import EventEmitter from 'events';
import {register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import actions from '../actions/player-actions';

const CHANGE_EVENT = 'change',
  AUDIO = document.createElement('audio');
let _isPlaying = false,
  _currentSongList,
  _currentSong = null,
  _progress = 0;

function _start (song, songList) {
  if (_currentSong && song._id === _currentSong._id) {
    _resume();
    return;
  }
  _currentSongList = songList || _currentSongList;
  _pause();
  _load(song, _currentSongList);
  _resume();
}

function _load (song, songList) {
  AUDIO.src = song.audioUrl;
  AUDIO.load();
  _currentSong = song;
  _currentSongList = songList;
  _progress = 0;
}

function _pause () {
  AUDIO.pause();
  _isPlaying = false;
}

function _resume () {
  AUDIO.play();
  _isPlaying = true;
}

function _moveTo (index) {
    index += _currentSongList.length;
    index %= _currentSongList.length;
    _start(_currentSongList[index], _currentSongList);
}

const PlayerStore = Object.assign(EventEmitter.prototype, {
  emitChange () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener (cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  isPlaying () {
    return _isPlaying;
  },
  getCurrentSong () {
    return _currentSong;
  },
  getProgress () {
    return _progress;
  },
  dispatcherIndex: register(action => {

    let changed = true,
      index;

    switch (action.actionType) {
      case AppConstants.START_SONG:
        _start(action.song, action.songList);
        break;
      case AppConstants.PAUSE_SONG:
        _pause();
        break;
      case AppConstants.RESUME_SONG:
        _resume();
        break;
      case AppConstants.NEXT_SONG:
        index = _currentSongList.indexOf(_currentSong);
        _moveTo(index + 1);
        break;
      case AppConstants.PREVIOUS_SONG:
        index = _currentSongList.indexOf(_currentSong);
        _moveTo(index - 1);
        break;
      default:
        changed = false;
        break;
    }

    if (changed) PlayerStore.emitChange();
  })
});

AUDIO.addEventListener('timeupdate', () => {
  _progress = AUDIO.currentTime / AUDIO.duration;
  PlayerStore.emitChange();
});

AUDIO.addEventListener('ended', () => {
  actions.nextSong();
});

export default PlayerStore;
