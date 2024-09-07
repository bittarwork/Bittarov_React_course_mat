import React from 'react';
import ReminderItem from './ReminderItem';

function ReminderList({ reminders, dispatch }) {
    return (
        <div className="w-1/2 p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">قائمة التذكيرات</h2>
            <ul>
                {reminders.map(reminder => (
                    <ReminderItem key={reminder.id} reminder={reminder} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

export default ReminderList;
