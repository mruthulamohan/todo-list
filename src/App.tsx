import React, { useState } from 'react';
// @ts-ignore: allow side-effect import of CSS in this TSX file
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const[todo, setTodo] = useState<string>("");  
  const[todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }
  return (
    <div className="App">
      <h1 className="heading">Todo List</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div> 
  );
}
 
export default App;
