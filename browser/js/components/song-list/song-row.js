'use strict';

import React from 'react';
import actions from '../../actions/player-actions';
import PlayerStore from '../../stores/player-store';

export default (props) => {

  let isCurrentSong = PlayerStore.getCurrentSong() && (PlayerStore.getCurrentSong()._id === props.song._id),
    isCurrentlyPlaying = isCurrentSong && PlayerStore.isPlaying();

  function toggle (song, songList) {
    if (isCurrentlyPlaying) actions.pauseSong();
    else if (isCurrentSong) actions.resumeSong();
    else actions.startSong(song, songList);
  }

  return (
    <tr>
      <td>
        <button onClick={toggle.bind(this, props.song, props.songList)} className="btn btn-default btn-s">
          { isCurrentlyPlaying ? null : <span className="glyphicon glyphicon-play"></span> }
          { isCurrentlyPlaying ? <span className="glyphicon glyphicon-pause"></span> : null }
        </button>
      </td>
      <td>{props.song.name}</td>
      <td>
        {
          props.song.artists.map(artist => {
            return <span key={artist._id}>{artist.name} </span>
          })
        }
      </td>
      <td>{props.song.genres.join(', ')}</td>
    </tr>
  );
}
