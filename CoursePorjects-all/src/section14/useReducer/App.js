import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// Initial state for the to-do list
const initialState = {
    todos: [],
    error: null,
};

// Reducer function for managing state transitions
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.payload.trim() === '') {
                return { ...state, error: 'Task name cannot be empty' };
            }
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), task: action.payload, completed: false }],
                error: null,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case 'CLEAR_ERROR':
            return { ...state, error: null };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState('');

    // Add a new task
    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: task });
        setTask(''); // Clear input field
    };

    // Mark task as complete or incomplete
    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    // Delete a task
    const handleDeleteTodo = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    // Clear error message when user types in the input field
    const handleInputChange = (e) => {
        if (state.error) {
            dispatch({ type: 'CLEAR_ERROR' });
        }
        setTask(e.target.value);
    };

    const { todos, error } = state;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

                {/* Display form and handle error */}
                <TodoForm
                    task={task}
                    onInputChange={handleInputChange}
                    onAddTodo={handleAddTodo}
                    error={error}
                />

                {/* Display the list of to-dos */}
                <TodoList
                    todos={todos}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                />
            </div>
        </div>
    );
}

export default App;
