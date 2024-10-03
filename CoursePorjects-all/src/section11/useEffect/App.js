import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayUser from './DisplayUser';
import Button from './Button';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Define fetchData function outside of useEffect so it's reusable
    const fetchData = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            setUser(response.data.results[0]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setLoading(false);
        }
    };

    // useEffect hook to fetch data on component mount
    useEffect(() => {
        fetchData(); // Call the fetchData function on mount
    }, []); // Empty dependency array to run effect only once on mount

    const handleClick = () => {
        setLoading(true);
        setUser(null); // Reset user data
        fetchData(); // Fetch new user data
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
                {loading ? (
                    <div className="text-center text-blue-500">Loading...</div>
                ) : (
                    user && <DisplayUser user={user} />
                )}
                <Button onClick={handleClick} />
            </div>
        </div>
    );
}

export default App;
