import React, { useState } from 'react';
// @ts-ignore: allow side-effect import of CSS in this TSX file
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const active = Array.from(todos);
    const complete = Array.from(completedTodos);
    let moved = source.droppableId === 'TodosList' ? active[source.index] : complete[source.index];

    if (source.droppableId === 'TodosList') {
      active.splice(source.index, 1);
    } else {
      complete.splice(source.index, 1);
    }

    moved = {
      ...moved,
      isDone: destination.droppableId === 'TodosRemove',
    };

    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, moved);
    } else {
      complete.splice(destination.index, 0, moved);
    }

    setTodos(active);
    setCompletedTodos(complete);
  }

  const handleDone = (todo: Todo) => {
    if (todo.isDone) {
      setCompletedTodos(prev => prev.filter(item => item.id !== todo.id));
      setTodos(prev => [...prev, { ...todo, isDone: false }]);
    } else {
      setTodos(prev => prev.filter(item => item.id !== todo.id));
      setCompletedTodos(prev => [...prev, { ...todo, isDone: true }]);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h1 className="heading">Todo List</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          onDone={handleDone} />
      </div>
    </DragDropContext>

  );
}

export default App;
