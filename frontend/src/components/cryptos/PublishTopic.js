import React, { useState } from 'react';

import './PublishTopic.css';
import Card from '../UI/Card';

function PublishTopic(props) {
  const [enteredTopic, setEnteredTopic] = useState('');


  function publishTopicHandler(event) {
    setEnteredTopic(event.target.value);
    event.preventDefault();
    const userid = props.user.email;
    props.onPublishTopic(userid);
    
    setEnteredTopic('');


  }

  return (
    <section id='publish-topic-input'>
      <Card>
        <form onSubmit={publishTopicHandler}>

          <button type='submit' id="topic" name="getData"
          >Get Updated Data </button>

        </form>
      </Card>
    </section>
  );
}

export default PublishTopic;
