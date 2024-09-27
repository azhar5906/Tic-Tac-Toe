import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import TicTacToe from "./components/TicTacToe";

function App() {
  // Initialize isLoggedIn state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  // Update the localStorage whenever login state changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <TicTacToe />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
