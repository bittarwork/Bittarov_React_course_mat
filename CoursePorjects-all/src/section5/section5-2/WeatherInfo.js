import React from 'react';

const WeatherInfo = ({ weather }) => {
    const { main, weather: weatherData, name } = weather;
    const temperature = main.temp.toFixed(1);
    const description = weatherData[0].description;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">{name}</h2>
            <p className="text-4xl font-semibold text-gray-800 mb-2">{temperature}°C</p>
            <p className="text-lg font-medium text-gray-600 capitalize">{description}</p>
        </div>
    );
};

export default WeatherInfo;
