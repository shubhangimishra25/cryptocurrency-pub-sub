import React, { useState } from 'react';

import './UnsubscribeTopic.css';
import Card from '../UI/Card';

function UnsubscribeTopic(props) {
  const [enteredTopic, setEnteredTopic] = useState('');

  function updateTopicHandler(event) {
    setEnteredTopic(event.target.value);
  }
  const elements = props.topics;

  let topicsList = elements.length > 0
    	&& elements.map((item, i) => {
      return (
        <option key={i} value={item.name}>{item.name}</option>
      )
    }, this);



  function topicSubmitHandler(event) {
    setEnteredTopic(event.target.value);
    event.preventDefault();
  
    const userid = props.user.email;
    if (enteredTopic!=''){
    props.onDeleteTopic(userid,enteredTopic);}
    else{
      alert('select atleast one topic to unsubscribe')
    }
    

    setEnteredTopic('');
  }

  return (
    <section id='topic-input'>
    <Card>
    <form onSubmit={topicSubmitHandler}>
    <label htmlFor='text'>Pick cryptocurrency you want to unsubscribe</label>
        
        <select value={enteredTopic} onChange={updateTopicHandler}>
        <option value=""></option>
      
          {topicsList}
        </select>
      
        <button type='submit' value="submit">UnSubscribe </button>

    </form>
    </Card>
  </section>
  
  );
}

export default UnsubscribeTopic;
