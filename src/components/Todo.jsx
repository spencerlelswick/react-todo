import React, { useState } from 'react';

const Todo = (props) => {
  const { name, complete } = props.todo;
  const [updatedTodos, setUpdatedTodos] = useState([...props.todos]);

  const handleClick = (todo) => {
    console.log(todo);
    const updatedTodo = { ...todo, complete: !todo.completed };
    const idx = updatedTodos.findIndex((t) => t.name === todo.name);
    const updTodo = [...updatedTodos];
    updTodo.splice(idx, 1, updatedTodo);
    console.log(updTodo);
    setUpdatedTodos(updTodo);

    props.setTodos(updTodo);
  };

  return (
    <div className='todo-item' onClick={() => handleClick(props.todo)}>
      Name: {name} <span>{complete ? '✔️' : '❌'} </span>
    </div>
  );
};

export default Todo;
