import React, { useState } from 'react';

import './SongInput.css';
import Card from '../UI/Card';

function SongInput(props) {
  const [enteredSongText, setEnteredSongText] = useState('');

  function updateSongTextHandler(event) {
    setEnteredSongText(event.target.value);
  }

  function songSubmitHandler(event) {
    event.preventDefault();

    if (enteredSongText.trim().length === 0) {
      alert('Invalid Song - please enter a song name');
      return;
    }

    props.onAddSong(enteredSongText);

    setEnteredSongText('');
  }

  return (
    <section id='song-input'>
      <Card>
        <form onSubmit={songSubmitHandler}>
          <label htmlFor='text'>New Song</label>
          <input
            type='text'
            id='text'
            value={enteredSongText}
            onChange={updateSongTextHandler}
          />
          <button>Add Song</button>
        </form>
      </Card>
    </section>
  );
}

export default SongInput;
