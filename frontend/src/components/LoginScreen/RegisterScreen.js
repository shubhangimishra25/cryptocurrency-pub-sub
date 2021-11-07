import React, { useState } from 'react';

import './LoginScreen.css';
import Card from '../UI/Card';

function RegisterScreen({Register,Error}) {

  const [user, setEnteredUser] = useState({username:"",password:""});
  

  function registerhandler(event) {
    event.preventDefault(); 
Register(user)
  }

  return (
    <section id='login-input'>
      <Card>
          <form onSubmit={registerhandler}>
          <label htmlFor='text'>Register</label>
          <input
            type='email'
            id='username'
            placeholder='username'
            value={user.username}
            
            onChange={e=>setEnteredUser({...user,username:e.target.value})}
          />     
               <input
          type='password'
          id='password'
          placeholder='password'
          value={user.password}
          
          onChange={e=>setEnteredUser({...user,password:e.target.value})}

        />
          <button type='submit'>Register</button>
        </form>
      </Card>
    </section>
  );
}

export default RegisterScreen;




