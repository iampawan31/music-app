import React, { useState, useRef, useEffect } from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <div className="next-up">
        <strong>Next Up: </strong>
        {`${props.songs[props.nextSongIndex].title} by ${
          props.songs[props.nextSongIndex].artist
        }`}
      </div>
    </div>
  );
}

export default Player;
