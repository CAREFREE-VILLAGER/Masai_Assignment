import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Pagination from './Pagination';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:5000/todos?_page=${currentPage}&_limit=${itemsPerPage}`)
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
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <div>
      <h1>Todo App</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <TodoList todos={todos} />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={todos.length} 
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
};

export default TodoApp;
