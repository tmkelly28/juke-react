'use strict';

import React from 'react';
import axios from 'axios';
import AlbumViewController from '../../mixins/album-vc-mixin';
import AlbumCard from './album-card';
import AlbumStore from '../../stores/album-store';
import actions from '../../actions/app-actions';

function getAlbums () {
  return {
    albums: AlbumStore.getAlbums()
  }
}

const Albums = (props) => {

  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
        {
          props.albums.map(album => {
            return <AlbumCard key={album._id} album={album} />
          })
        }
      </div>
    </div>
  );
}

export default AlbumViewController(Albums, getAlbums, actions.getAlbums);
