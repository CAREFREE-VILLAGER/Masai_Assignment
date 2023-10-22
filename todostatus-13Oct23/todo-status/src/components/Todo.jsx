import React, { useState } from 'react';
import TodoList from './TodoList'; // Import TodoList
import TodoItem from './TodoItem'; // Import TodoItem

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleTaskChange}
      />
      <button onClick={addTask}>Add</button>
      <TodoList tasks={tasks} /> {/* Use TodoList component here */}
    </div>
  );
}

export default Todo;
