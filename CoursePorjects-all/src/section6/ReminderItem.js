import React from 'react';

function ReminderItem({ reminder, dispatch }) {
    return (
        <li className="bg-gray-100 p-4 mb-2 shadow-md rounded flex justify-between items-center">
            <span>{reminder.text} - {new Date(reminder.date).toLocaleDateString()}</span>
            <button
                onClick={() => dispatch({ type: 'REMOVE_REMINDER', payload: reminder.id })}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                حذف
            </button>
        </li>
    );
}

export default ReminderItem;
