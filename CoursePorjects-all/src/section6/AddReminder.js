import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddReminder({ dispatch }) {
    const [reminderText, setReminderText] = useState('');
    const [reminderDate, setReminderDate] = useState('');

    const handleAddReminder = () => {
        if (reminderText.trim() && reminderDate) {
            dispatch({
                type: 'ADD_REMINDER',
                payload: { id: uuidv4(), text: reminderText, date: reminderDate }
            });
            setReminderText('');
            setReminderDate('');
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-4 shadow-md rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">إضافة تذكير</h2>
            <input
                type="text"
                value={reminderText}
                onChange={(e) => setReminderText(e.target.value)}
                placeholder="أدخل نص التذكير"
                className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
                type="date"
                value={reminderDate}
                onChange={(e) => setReminderDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
                onClick={handleAddReminder}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                إضافة تذكير
            </button>
        </div>
    );
}

export default AddReminder;
