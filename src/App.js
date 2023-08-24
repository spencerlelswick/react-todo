import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import newTodo from './components/newTodo';

function App() {

  const [todos, setTodos] = useState([
    {name:'take out trash', complete: false},
    {name:'code todo project', complete: false},
    {name:'cook dinner', complete: false},
  ])

  return (
    <div className="App">
      <main>
        {todos.map((todo) => <Todo todo={todo} />)}
      </main>
      <section>
        <newTodo />
      </section>

    </div>
  );
}

export default App;
