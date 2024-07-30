"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [text, setText] = useState();
    const [todos, setTodos] = useState([]);
    // const [optimisticTodo , setoptimisticTodo] = useOptimistic([]);

    const handleSubmit = () => {
        setTodos([...todos, { id: Date.now(), text: text }]);
        setText("");
    };

    return (
        <div>
            <TodoItem setText={setText} handleSubmit={handleSubmit} />
            <ul>
                {todos &&
                    todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
            </ul>
        </div>
    );
};

export default Todo;
