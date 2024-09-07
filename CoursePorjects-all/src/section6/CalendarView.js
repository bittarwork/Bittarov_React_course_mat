import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

function CalendarView({ reminders }) {
    const today = new Date();
    const start = startOfMonth(today);
    const end = endOfMonth(today);
    const days = eachDayOfInterval({ start, end });

    const getRemindersForDay = (date) => {
        return reminders.filter(reminder => new Date(reminder.date).toDateString() === date.toDateString());
    };

    return (
        <div className="w-1/2 p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">التقويم</h2>
            <div className="grid grid-cols-7 gap-2">
                {days.map(day => (
                    <div key={day} className="border p-2 rounded">
                        <div className="font-semibold text-center">{format(day, 'd')}</div>
                        <ul>
                            {getRemindersForDay(day).map(reminder => (
                                <li key={reminder.id} className="text-sm">{reminder.text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CalendarView;
