import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    document.title = `Clicked ${count + 1} times`;
  };

  return (
    <div className="App">
      <h1>{`Clicked ${count} times`}</h1>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default App;
