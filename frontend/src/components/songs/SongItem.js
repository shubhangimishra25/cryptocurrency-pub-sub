import React from 'react';

import './SongItem.css';

function SongItem(props) {
  return <li className="song-item" onClick={props.onDelete.bind(null, props.id)}>{props.text}</li>;
}

export default SongItem;
