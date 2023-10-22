import React, { useState } from 'react';

function TodoItem({ task }) {
  const [completed, setCompleted] = useState(task.completed);

  const toggleStatus = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      <button onClick={toggleStatus}>Toggle</button>
    </li>
  );
}

export default TodoItem;




