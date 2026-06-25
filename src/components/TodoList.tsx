import React from "react";
// @ts-ignore: allow importing CSS without type declarations
import '../App.css';
import SingleTodo from "./SingleTodo";

interface Props {
    todos: any[];
    setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
            ))}
        </div>
    );
};

export default TodoList;