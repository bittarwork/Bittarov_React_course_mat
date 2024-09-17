import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const App = () => {
    const [weather, setWeather] = useState(null);

    // التعامل مع البيانات الواردة من WeatherForm
    const fetchWeather = async (city) => {
        const apiKey = 'YOUR_API_KEY'; // استبدل بمفتاح API الخاص بك
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-white mb-6">تتبع الطقس</h1>
            <WeatherForm fetchWeather={fetchWeather} />
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
};

export default App;
