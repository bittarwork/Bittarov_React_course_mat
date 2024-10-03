import React from 'react';

function TodoForm({ task, onInputChange, onAddTodo, error }) {
    return (
        <div className="mb-4">
            <input
                type="text"
                value={task}
                onChange={onInputChange}
                className="border p-2 w-full rounded"
                placeholder="Enter a task"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
                onClick={onAddTodo}
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
                Add Task
            </button>
        </div>
    );
}

export default TodoForm;
