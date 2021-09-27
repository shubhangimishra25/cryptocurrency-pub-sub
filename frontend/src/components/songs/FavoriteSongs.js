import React from 'react';

import './FavoriteSongs.css';
import Card from '../UI/Card';
import SongItem from './SongItem';

function FavoriteSongs(props) {
  const hasNoFavoriteSongs = !props.songs || props.songs.length === 0;

  return (
    <section id='favorite-songs'>
      <Card>
        <h2>Your favorite songs</h2>
        {hasNoFavoriteSongs && <h5>No favorite songs. Start adding some!</h5>}
        <ul>
          {props.songs.map((song) => (
            <SongItem
              key={song.id}
              id={song.id}
              text={song.text}
              onDelete={props.onDeleteSong}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default FavoriteSongs;
