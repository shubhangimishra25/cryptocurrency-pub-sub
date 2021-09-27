import React, { useState, useEffect } from 'react';

import SongInput from './components/songs/SongInput';
import FavoriteSongs from './components/songs/FavoriteSongs';
import ErrorAlert from './components/UI/ErrorAlert';

function App() {
  const [loadedSongs, setLoadedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await fetch('http://localhost/songs');

        const resData = await response.json();

        if (!response.ok) {
          throw new Error(resData.message || 'Fetching the songs failed.');
        }

        setLoadedSongs(resData.songs);
      } catch (err) {
        setError(
          err.message ||
            'Fetching songs failed - the server responsed with an error.'
        );
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function addSongHandler(songText) {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/songs', {
        method: 'POST',
        body: JSON.stringify({
          text: songText,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Adding the song failed.');
      }

      setLoadedSongs((prevSongs) => {
        const updatedSongs = [
          {
            id: resData.song.id,
            text: songText,
          },
          ...prevSongs,
        ];
        return updatedSongs;
      });
    } catch (err) {
      setError(
        err.message ||
          'Adding a song failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  async function deleteSongHandler(songId) {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost/songs/' + songId, {
        method: 'DELETE',
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message || 'Deleting the song failed.');
      }

      setLoadedSongs((prevSongs) => {
        const updatedSongs = prevSongs.filter((song) => song.id !== songId);
        return updatedSongs;
      });
    } catch (err) {
      setError(
        err.message ||
          'Deleting the song failed - the server responsed with an error.'
      );
    }
    setIsLoading(false);
  }

  return (
    <div>
      {error && <ErrorAlert errorText={error} />}
      <SongInput onAddSong={addSongHandler} />
      {!isLoading && (
        <FavoriteSongs songs={loadedSongs} onDeleteSong={deleteSongHandler} />
      )}
    </div>
  );
}

export default App;
