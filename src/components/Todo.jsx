import React, { useState } from 'react';

const Todo = (props) => {
  const { name, complete } = props.todo;

  const deleteTodo = (todo) => {
    console.log(`Deleting ${todo}`);
    const idx = props.todos.findIndex((t) => t.name === todo.name);
    const updTodo = [...props.todos];
    updTodo.splice(idx, 1);
    props.setTodos(updTodo);
  };

  const handleClick = (e, todo) => {
    console.log(e);
    if (e.target.className === 'icon-delete') return deleteTodo(todo);
    console.log('NOT DELETING');
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
