import React, { useState } from 'react';

import './login.css';
import Card from '../UI/Card';

function LoginInput(props) {

  const [user, setEnteredUser] = useState({email:"",pwd:""});


  function loginHandler(event) {
    event.preventDefault();


    if (user.username.trim().length === 0) {
      alert('Invalid crypto - please enter a email name');
      return;
    }

    props.onAddUser(user);

    setEnteredUser('');
  }

  return (
    <section id='login-input'>
      <Card>
          <form onSubmit={loginHandler}>
          <label htmlFor='text'>Login</label>
          <input
            type='email'
            id='email'
            placeholder='email'
            value={user.email}
            
            onChange={e=>setEnteredUser({...user,email:e.target.value})}
          />     
               <input
          type='password'
          id='password'
          placeholder='password'
          value={user.pwd}
          
          onChange={e=>setEnteredUser({...user,pwd:e.target.value})}

        />
          <button>Login</button>
        </form>
      </Card>
    </section>
  );
}

export default LoginInput;




