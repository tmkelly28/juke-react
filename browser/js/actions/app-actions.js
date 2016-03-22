'use strict';

import AppConstants from '../constants/app-constants';
import axios from 'axios';
import {dispatch} from '../dispatchers/app-dispatcher';
import albumConvert from '../utils/album-convert';
import songConvert from '../utils/song-convert';
import errorHandler from '../utils/error-handler';

export default {
  getAlbums () {
    dispatch({ actionType: AppConstants.LOADING_ALBUMS });
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(_albums => {
        let albums = _albums.map(albumConvert);
        dispatch({
          actionType: AppConstants.GET_ALBUMS,
          albums
        });
      })
      .catch(errorHandler)
  },
  getAlbumById (params) {
    dispatch({ actionType: AppConstants.LOADING_ALBUM });
    axios.get(`/api/albums/${params.albumId}`)
      .then(res => res.data)
      .then(album => albumConvert(album))
      .then(album => {
        album.songs = album.songs.map(song => songConvert(song, album.artists));
        dispatch({
          actionType: AppConstants.GET_ALBUM_BY_ID,
          album
        });
      })
      .catch(errorHandler);
  },
  getArtists () {
    dispatch({ actionType: AppConstants.LOADING_ARTISTS });
    axios.get('/api/artists/')
      .then(res => res.data)
      .then(artists => dispatch({
        actionType: AppConstants.GET_ARTISTS,
        artists
      }))
      .catch(errorHandler);
  },
  getArtistById (params) {
    dispatch({ actionType: AppConstants.LOADING_ARTIST });
    let url = `/api/artists/${params.artistId}`;
    Promise.all([axios.get(url), axios.get(url + '/songs'), axios.get(url + '/albums')])
      .then(arr => {
        let artist = arr[0].data,
          songs = arr[1].data.map(songConvert),
          albums = arr[2].data.map(albumConvert);
        artist.songs = songs;
        artist.albums = albums;
        dispatch({
          actionType: AppConstants.GET_ARTIST_BY_ID,
          artist
        })
      })
      .catch(errorHandler);
  }
}
