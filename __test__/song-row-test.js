'use strict';

jest.unmock('./browser/js/components/song-list/song-row');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SongRow from './browser/js/components/song-list/song-row';

let songList = [
  { name: 'Song 1', artists: ['Test Artist'] },
  { name: 'Song 2', artists: ['Test Artist'] },
  { name: 'Song 3', artists: ['Test Artist'] }
];

describe('SongRow', () => {

  it('starts playing a song on click', () => {

    const songRow = TestUtils.renderIntoDocument(
      <SongRow song={songList[0]} songList={songList} />
    );

    console.log(songRow)
    return true;
  });

});
