'use strict';

import AppConstants from '../constants/app-constants';
import {dispatch} from '../dispatchers/app-dispatcher';

export default {
  startSong (song, songList) {
    dispatch({
      actionType: AppConstants.START_SONG,
      song,
      songList
    });
  },
  pauseSong () {
    dispatch({ actionType: AppConstants.PAUSE_SONG });
  },
  resumeSong () {
    dispatch({ actionType: AppConstants.RESUME_SONG });
  },
  nextSong () {
    dispatch({ actionType: AppConstants.NEXT_SONG });
  },
  previousSong () {
    dispatch({ actionType: AppConstants.PREVIOUS_SONG });
  }
}
