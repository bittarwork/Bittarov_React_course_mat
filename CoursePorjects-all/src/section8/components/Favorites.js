import React from 'react';

const Favorites = ({ favorites, removeFromFavorites }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-red-700">Favorite Products</h2>
            {favorites.length === 0 ? (
                <p className="text-gray-600">No favorite items yet.</p>
            ) : (
                <div className="space-y-4">
                    {favorites.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md">
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-800">${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromFavorites(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
