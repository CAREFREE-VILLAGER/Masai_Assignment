import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;
