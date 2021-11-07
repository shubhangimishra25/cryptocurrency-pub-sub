import React, { useState } from 'react';

import './LoginScreen.css';
import Card from '../UI/Card';

function LoginScreen({Login,Error}) {

  const [user, setEnteredUser] = useState({username:"",password:""});
  

  function loginHandler(event) {
    event.preventDefault(); 
Login(user)
  }

  return (
    <section id='login-input'>
      <Card>
          <form onSubmit={loginHandler}>
          <label htmlFor='text'>Login</label>
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
          <button type='submit'>Login</button>
        </form>
      </Card>
    </section>
  );
}

export default LoginScreen;




