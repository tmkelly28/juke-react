'use strict';

import React from 'react';
import PlayerStore from '../../stores/player-store';
import actions from '../../actions/player-actions';

export default class Player extends React.Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.back = this.back.bind(this);
    this.toggle = this.toggle.bind(this);
    this.forward = this.forward.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount () {
    PlayerStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    PlayerStore.removeChangeListener(this._onChange);
  }

  back () {
    actions.previousSong();
  }

  toggle () {
    if (this.state.isPlaying) actions.pauseSong();
    else actions.resumeSong();
  }

  forward () {
    actions.nextSong();
  }

  _onChange () {
    this.setState({
      song: PlayerStore.getCurrentSong(),
      progress: PlayerStore.getProgress(),
      isPlaying: PlayerStore.isPlaying(),
      progress: PlayerStore.getProgress()
    })
  }

  render () {
    let percent = (100 * this.state.progress) + '%',
      progress = {
        width: percent
      }

    return (
      <footer>
        {
          this.state.song ?
          <div>
            <div className="pull-left">
              <button onClick={this.back} className="btn btn-default">
                <span className="glyphicon glyphicon-step-backward"></span>
              </button>
              <button onClick={this.toggle} className="btn btn-default">
                { this.state.isPlaying ? null : <span className="glyphicon glyphicon-play"></span> }
                { this.state.isPlaying ? <span className="glyphicon glyphicon-pause"></span> : null }
              </button>
              <button onClick={this.forward} className="btn btn-default">
                <span className="glyphicon glyphicon-step-forward"></span>
              </button>
            </div>
            <div className="bar">
              <div className="progress">
                <div className="progress-bar" style={progress}></div>
              </div>
            </div>
          </div>
        : null }
      </footer>
    );
  }
}
