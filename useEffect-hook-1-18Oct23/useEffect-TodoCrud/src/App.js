import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []); 

  const fetchTodos = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:5000/todos') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>TODO App</h1>
      <TodoForm fetchTodos={fetchTodos} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
