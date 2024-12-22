import React, { useState, useEffect } from 'react';
import './assets/CSS/App.css';
import Login from './pages/AuthenticationScreens/Login';
import Opening from './pages/Openings/Opening';

function App() {
  const [ShowOpeningScreen, setShowOpeningScreen] = useState(true);

  useEffect(() => {
    // After 3 seconds, hide the opening screen
    const timer = setTimeout(() => {
      setShowOpeningScreen(false);
    }, 3000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {ShowOpeningScreen ? (
        <Opening />
      ) : (
        <Login />
      )}
    </>
  )
}

export default App
