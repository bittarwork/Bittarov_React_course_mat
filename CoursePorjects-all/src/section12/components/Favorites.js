// src/components/Favorites.js

import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Favorites = () => {
    const { state } = useContext(BookContext);

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold text-center text-[#F5F5DC] mb-6">Favorite Books</h2>
            {state.favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.favorites.map((book) => (
                        <div key={book.id} className="bg-[#121212] rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 border border-[#A9A9A9]">
                            <h3 className="text-xl font-semibold text-[#F5F5DC] mb-2">{book.title}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-[#D3D3D3] text-lg">No favorite books found</p>
            )}
        </div>
    );
};

export default Favorites;
