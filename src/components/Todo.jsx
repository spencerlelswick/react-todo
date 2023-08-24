import React, { useState } from 'react';

const Todo = (props) => {
  const { name, complete } = props.todo;

  const deleteTodo = (todo) => {
    const idx = props.todos.findIndex((t) => t.name === todo.name);
    const updTodo = [...props.todos];
    updTodo.splice(idx, 1);
    props.setTodos(updTodo);
  };

  const handleClick = (e, todo) => {
    if (e.target.className === 'icon-delete') return deleteTodo(todo);
    const updatedTodo = { ...todo, complete: !todo.complete };
    const idx = props.todos.findIndex((t) => t.name === todo.name);
    const updTodo = [...props.todos];
    updTodo.splice(idx, 1, updatedTodo);
    props.setTodos(updTodo);
  };

  return (
    <div className='todo-item' onClick={(e) => handleClick(e, props.todo)}>
      <span className={complete ? 'strike-thru' : null}>{name}</span>{' '}
      <div className='icon-container'>
        <span className='icon-complete'>{complete ? '✔️' : '❌'}</span>
        <span className='icon-delete'></span>
      </div>
    </div>
  );
};

export default Todo;
