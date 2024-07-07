import React from 'react';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    navigate('/sesion');
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, {user.nombres} {user.apellidos}!</h1>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <h2>Featured Events</h2>

    </div>
  );
};

export default Welcome;
