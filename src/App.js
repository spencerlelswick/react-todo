import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([
    {name:'take out trash', complete: false},
    {name:'code todo project', complete: false},
    {name:'cook dinner', complete: false},
  ])

  return (
    <div className="App">
      <main>
        <h1>React Todo App</h1>
        {todos.map((todo) => <Todo todo={todo} setTodos={setTodos}  todos={todos}/>)}
      </main>
      <section>
        <AddTodo setTodos={setTodos} todos={todos} />
      </section>

    </div>
  );
}

export default App;
