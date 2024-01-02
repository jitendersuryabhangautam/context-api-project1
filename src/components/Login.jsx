import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    // You can also perform additional logic here, like clearing the username and password fields after submission
    setUserName('');
    setPassword('');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} />
       
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
