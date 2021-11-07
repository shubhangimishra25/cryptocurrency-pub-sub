import React from 'react';

import './CryptoItem.css';

function CryptoItem(props) {
  return <li className="crypto-item" onClick={props.onDelete.bind(null, props.id)}>{props.text}</li>;
}

export default CryptoItem;
