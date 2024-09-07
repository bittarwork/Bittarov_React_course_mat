import React, { useReducer, useEffect } from 'react';
import ReminderList from './ReminderList';
import AddReminder from './AddReminder';
import CalendarView from './CalendarView';

// الحالة الأولية
const initialState = {
    reminders: []
};

// دالة التخفيض
function reducer(state, action) {
    switch (action.type) {
        case 'ADD_REMINDER':
            return { ...state, reminders: [...state.reminders, action.payload] };
        case 'REMOVE_REMINDER':
            return { ...state, reminders: state.reminders.filter(reminder => reminder.id !== action.payload) };
        case 'LOAD_REMINDERS':
            return { ...state, reminders: action.payload };
        default:
            throw new Error('Unknown action type');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // محاكاة تحميل التذكيرات من API
        const loadReminders = async () => {
            const reminders = await fetch('/api/reminders').then(res => res.json());
            dispatch({ type: 'LOAD_REMINDERS', payload: reminders });
        };

        loadReminders();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold mb-4">إدارة التذكيرات</h1>
            <AddReminder dispatch={dispatch} />
            <div className="flex w-full max-w-4xl">
                <ReminderList reminders={state.reminders} dispatch={dispatch} />
                <CalendarView reminders={state.reminders} />
            </div>
        </div>
    );
}

export default App;
