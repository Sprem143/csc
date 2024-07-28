
import './App.scss'
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const register = () => {
    axios.post('http://localhost:5000/register', { username, password })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    axios.post('http://localhost:5000/login', { username, password })
      .then((response) => {
        console.log(response.data.token);
        setToken(response.data.token);
        fetchUser(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    console.log('Successfully logged out');
  };

  const fetchUser = (authToken) => {
    axios.get('http://localhost:5000/user', {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>MERN JWT Auth App</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
      </div>
      {user && (
        <div>
          <h2>User Info</h2>
          <p>Username: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default App;

