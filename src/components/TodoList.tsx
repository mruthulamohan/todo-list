import React from "react";
// @ts-ignore: allow importing CSS without type declarations
import '../App.css';
import SingleTodo from "./SingleTodo";
import { Todo } from "../model";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<any[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    onDone: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos, onDone }) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver ? 'drag-active' : ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <span className="todos__text">Active List</span>
                        {todos.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todo={todo}
                                todos={todos}
                                key={todo.id}
                                setTodos={setTodos}
                                onDone={onDone}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div className={`todos ${snapshot.isDraggingOver ? 'drag-complete' : 'remove'}`} ref={provided.innerRef} {...provided.droppableProps}>
                        <span className="todos__text">Completed List</span>
                        {completedTodos.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                todo={todo}
                                todos={completedTodos}
                                key={todo.id}
                                setTodos={setCompletedTodos}
                                onDone={onDone}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;