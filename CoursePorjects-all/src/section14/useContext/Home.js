// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Welcome to Our App!</h1>
            <p className="text-gray-600 mb-4">Click below to view your profile.</p>
            <Link
                to="/profile"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-200"
            >
                Go to Profile
            </Link>
        </div>
    );
}

export default Home;
