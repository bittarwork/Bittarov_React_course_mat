import React, { useState } from 'react';

export default function TaskInput({ addTask }) {


    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="أدخل مهمة جديدة"
            />
            <button type="submit">أضف مهمة</button>
        </form>
    );
}
