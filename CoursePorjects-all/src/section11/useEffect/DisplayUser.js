import React from 'react';

function DisplayUser({ user }) {
    return (
        <div className="text-center">
            <img
                className="mx-auto rounded-full border-4 border-blue-300"
                src={user.picture.large}
                alt={user.name.first}
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
                {user.name.first} {user.name.last}
            </h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
        </div>
    );
}

export default DisplayUser;
