import React from 'react';

import './Success.css';

function SuccessAlert(props) {
  return (
    <section className='success-alert'>
      <h2>Success!</h2>
      <p>{props.successText}</p>
    </section>
  );
}

export default SuccessAlert;
