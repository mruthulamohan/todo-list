import React from "react";
import '../App.css';

interface Props {
    todos: any[];
    setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <li key={todo.id}>{todo.todo}</li>
            ))}
        </div>
    );
};

export default TodoList;