import React, { useState } from 'react';

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({ name: '', complete: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  const handleChange = (e) => {
    const newTodoName = e.target.value;
    setNewTodo({ name: newTodoName, complete: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddTodo;
