import React from 'react';

const FavoritesList = ({ favorites, onRemove }) => {
    if (favorites.length === 0) {
        return <p className="text-gray-700">No favorite items yet.</p>;
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Favorites</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Product Name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {favorites.map((item, index) => (
                        <tr key={index} className="border-t">
                            <td className="px-4 py-2">{item}</td>
                            <td className="px-4 py-2">
                                <button
                                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                    onClick={() => onRemove(item)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoritesList;
