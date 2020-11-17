import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
  return (
    <div className="c-player">
      <PlayerDetails song={props.song} />
      <audio></audio>
      <PlayerControls />
      <div className="next-up">
        <strong>Next Up: </strong>
        {`${props.nextSong.title} by ${props.nextSong.artist}`}
      </div>
    </div>
  );
}

export default Player;
