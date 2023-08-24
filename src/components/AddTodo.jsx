import React, { useState } from 'react';

const AddTodo = (props) => {
  const [newTodo, setNewTodo] = useState({ name: '', complete: false });

  const handleChange = (e) => {
    const newTodoName = e.target.value;
    setNewTodo({ name: newTodoName, complete: false });
  };

  return (
    <form>
      <input type='text' onChange={handleChange} />
      <button
        onClick={() => {
          props.handleAddTodo(newTodo);
        }}
        type='button'
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
