import React from 'react';

import './SubscribedTopic.css';
import Card from '../UI/Card';

function SubscribedTopic(props) {
    console.log(props)
    const elements = props.user;
    const items = []
    for (const [index, value] of elements.entries()) {
        items.push(<li key={index}>{value}</li>)
    }
    return (
        <section id='topic-output'>
            <Card>
                <form >
                    <label htmlFor='text'>Your subscribed topics are</label>
                  {items}
                </form>
            </Card>
        </section>
    );
}

export default SubscribedTopic;
