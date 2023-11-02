import React, { useState } from 'react';

function TodoForm({ fetchTodos }) {
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() === '') return;

    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    })
      .then(() => {
        setTask('');
        fetchTodos(); 
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoForm;
