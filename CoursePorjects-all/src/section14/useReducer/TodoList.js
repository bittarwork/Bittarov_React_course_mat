import React from 'react';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500">No tasks available</p>;
    }

    return (
        <ul className="list-none">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'bg-green-100 line-through' : ''
                        }`}
                >
                    <span
                        onClick={() => onToggleTodo(todo.id)}
                        className="cursor-pointer"
                    >
                        {todo.task}
                    </span>
                    <button
                        onClick={() => onDeleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
