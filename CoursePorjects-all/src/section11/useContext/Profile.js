import React from 'react';
import { useUser } from './UserContext';

function Profile() {
    const { user, loading, error } = useUser();

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <p className="text-gray-800"><strong>Name:</strong> {user.name}</p>
            <p className="text-gray-800"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-800"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-800"><strong>Company:</strong> {user.company.name}</p>
        </div>
    );
}

export default Profile;
