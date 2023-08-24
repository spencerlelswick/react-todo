import React from 'react';

const Todo = (props) => {
  const { name, complete } = props.todo;
  return (
    <div className='todo-item'>
      Name: {name} <span>Complete: {complete ? 'DONE' : 'incomplete'} </span>
    </div>
  );
};

export default Todo;
