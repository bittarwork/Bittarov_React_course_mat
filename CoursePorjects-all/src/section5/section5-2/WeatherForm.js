import React, { useState } from 'react';

const WeatherForm = ({ fetchWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== '') {
            fetchWeather(city);
            setCity('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-lg w-full">
            <input
                type="text"
                className="border p-3 w-full mb-4 rounded-md"
                placeholder="أدخل اسم المدينة"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="bg-teal-500 text-white p-3 w-full rounded-md hover:bg-teal-600">
                ابحث عن الطقس
            </button>
        </form>
    );
};

export default WeatherForm;
