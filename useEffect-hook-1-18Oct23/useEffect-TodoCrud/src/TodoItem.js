import React from 'react';

function TodoItem({ todo, fetchTodos }) {
  const toggleStatus = () => {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then(() => {
        fetchTodos(); 
      });
  };

  const deleteTodo = () => {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        fetchTodos(); 
      });
  };

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.task}
      </span>
      <button onClick={toggleStatus}>Toggle</button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
