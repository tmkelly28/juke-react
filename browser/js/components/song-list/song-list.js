'use strict';

import React from 'react';
import SongRow from './song-row';

export default (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {
          props.songs ? props.songs.map(song => {
            return <SongRow key={song._id} song={song} songList={props.songs} />
          }) : null
        }
      </tbody>
    </table>
  );
}
