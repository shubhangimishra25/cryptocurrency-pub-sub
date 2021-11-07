import React, { useState } from 'react';

import './TopicInput.css';
import Card from '../UI/Card';

function TopicInput(props) {
  const [enteredTopic, setEnteredTopic] = useState('');

  function updateTopicHandler(event) {
    setEnteredTopic(event.target.value);
  }

  function topicSubmitHandler(event) {
    setEnteredTopic(event.target.value);
    event.preventDefault();
  
    const userid = props.user.email;
   
    if (enteredTopic!=''){ props.onAddTopic(userid,enteredTopic);}
      else{
        alert('select atleast one topic to subscribe')
      }
    

    setEnteredTopic('');
  }

    return (
      <section id='topic-input'>
      <Card>
      <form onSubmit={topicSubmitHandler}>
      <label htmlFor='text'>Pick your favorite cryptocurrency</label>
          
          <select value={enteredTopic} onChange={updateTopicHandler}>
          <option value=""></option>

            <option value="Ethereum">Ethereum</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Dock">Dock</option>
            <option value="Electroneum">Electroneum</option>
            <option value="Wanchain">Wanchain</option>
            <option value="Tether">Tether</option>
          </select>
        
          <button type='submit' value="submit">Subscribe </button>

      </form>
      </Card>
    </section>
    );
  
  return (
    <section id='topic-input'>
      <Card>
        <form onSubmit={topicSubmitHandler}>
        {/* <label htmlFor='text'>Enter topic you want to subscribe</label>
          <input
            type='text'
            id='text'
            value={enteredTopic}
            onChange={updateTopicHandler}
          /> */}
  
          

{/* 
  <input type="button" id="ethereum" name="ethereum" value="Ethereum"/>
  <label htmlFor="ethereum"> Subscribe for Ethereum information</label>

  <input type="button" id="electroneum" name="electroneum" value="Electroneum"/>
  <label htmlFor="electroneum"> Subscribe for Electroneum information</label>

  <input type="button" id="wanchain" name="wanchain" value="Wanchain"/>
  <label htmlFor="wanchain"> Subscribe for Wanchain information</label>

  <input type="button" id="dock" name="dock" value="Dock"/>
  <label htmlFor="dock"> Subscribe for Dock information</label>

  <input type="button" id="tether" name="tether" value="Tether"/>
  <label htmlFor="tether"> Subscribe for Tether information</label> 
  
   <input type="button" id="bitcoin" name="bitcoin" value="Bitcoin"/>
  <label htmlFor="tether"> Subscribe for Bitcoin information</label> */}

          <button type='submit' id="topic" name="topic">Subscribe </button>

        </form>
      </Card>
    </section>
  );
}

export default TopicInput;




// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default TopicInput;
