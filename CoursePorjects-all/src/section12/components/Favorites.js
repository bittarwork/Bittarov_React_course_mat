// src/components/Favorites.js
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Favorites = () => {
    const { state } = useContext(BookContext);

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#222] dark:text-[#F5F5DC]">Favorite Books</h2>
            {state.favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {state.favorites.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 p-5"
                        >
                            <h3 className="text-2xl font-semibold text-[#333] dark:text-[#F5F5DC] mb-4">{book.title}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-[#555] dark:text-[#D3D3D3] text-lg">No favorite books found</p>
            )}
        </div>
    );
};

export default Favorites;
