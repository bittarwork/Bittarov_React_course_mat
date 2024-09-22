import React, { useReducer } from 'react';
import 'tailwindcss/tailwind.css'; // تأكد من استيراد Tailwind CSS

// المُخفض (reducer) لإدارة حالة المهام
function tasksReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), task: action.task, done: false }];
        case 'complete':
            return state.map(task =>
                task.id === action.id ? { ...task, done: !task.done } : task
            );
        case 'remove':
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}

function TaskManager() {
    // استخدام useReducer مع الحالة الأولية (قائمة فارغة)
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    const addTask = () => {
        const newTask = prompt('أدخل المهمة الجديدة:');
        if (newTask) {
            dispatch({ type: 'add', task: newTask });
        }
    };

    const completeTask = id => {
        dispatch({ type: 'complete', id });
    };

    const removeTask = id => {
        dispatch({ type: 'remove', id });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h1 className="text-2xl font-bold text-center mb-4">مدير المهام اليومية</h1>
                <button
                    onClick={addTask}
                    className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    إضافة مهمة جديدة
                </button>
                <ul className="space-y-2">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className={`flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm ${task.done ? 'bg-green-100 line-through' : ''
                                }`}
                        >
                            <span>{task.task}</span>
                            <div className="space-x-2">
                                <button
                                    onClick={() => completeTask(task.id)}
                                    className={`px-2 py-1 text-sm rounded-md ${task.done
                                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                        : 'bg-green-500 hover:bg-green-600 text-white'
                                        }`}
                                >
                                    {task.done ? 'إلغاء الإتمام' : 'إتمام'}
                                </button>
                                <button
                                    onClick={() => removeTask(task.id)}
                                    className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md"
                                >
                                    إزالة
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskManager;
