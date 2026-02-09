import { useState } from 'react';

function Todo() {
    const [todoInput, setTodoInput] = useState('');
    const [todos, setTodos] = useState([]);

    function addTodo() {
        if (todoInput.trim() === '') return;

        setTodos([...todos, todoInput]);
        setTodoInput(''); // clear input after add
    }

    function resetTodos() {
        setTodos([]);
    }

    return (
        <div>
            <input
                type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}
            />

            <button onClick={addTodo}>Add Todo</button>
            <button onClick={resetTodos}>Reset</button>

            <h2>Your Todos</h2>

            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
        </div>
    );
}

export default Todo;