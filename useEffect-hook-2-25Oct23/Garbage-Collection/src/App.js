import React, { useState } from "react";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  const toggleTimer = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  };

  return (
    <div className="container">
      <h1>Timer App</h1>
      <button onClick={toggleTimer}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
