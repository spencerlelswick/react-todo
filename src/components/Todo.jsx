import React from 'react';

const Todo = (props) => {
  const { name, complete } = props.todo;
  console.log(props);
  return (
    <div class='todo-item'>
      Name: {name} <span>Complete: {complete ? 'DONE' : 'incomplete'} </span>
    </div>
  );
};

export default Todo;
