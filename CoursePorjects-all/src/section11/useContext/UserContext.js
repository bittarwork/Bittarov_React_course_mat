import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch user data
    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1'); // Example API
            setUser(response.data);
        } catch (err) {
            setError('Failed to fetch user data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};
