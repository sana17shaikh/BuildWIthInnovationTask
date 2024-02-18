import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Component/Home';
import Cart from './Component/Cart'

function App() {
  const [token, setToken] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchCurrentUser(storedToken);
    }
  }, []);

  const fetchCurrentUser = (token) => {
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setLoggedInUser(data);
    })
    .catch(error => {
      console.error('Error fetching current user:', error);
    });
  }

  const handleLogin = (username, password) => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'kminchelle',
    password: '0lelplR',})
    })
    .then(res => res.json())
    .then(data => {
      setToken(data.token);
      localStorage.setItem('token', data.token);
      fetchCurrentUser(data.token);
    })
    .catch(error => {
      console.error('Login failed:', error);
      alert.error('Login failed:', error);
    });
  }

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setLoggedInUser(null);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={token ? <Home loggedInUser={loggedInUser} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
         
        />
        <Route
          path="/home"
          element={token ? <Home loggedInUser={loggedInUser} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
        />
        <Route path='/cart' element={<Cart/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
