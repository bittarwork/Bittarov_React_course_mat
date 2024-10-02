// src/components/BookList.js
import { Link } from 'react-router-dom';

import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookList = () => {
    const { state, dispatch } = useContext(BookContext);

    const addToWishList = (book) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: book });
    };

    const addToFavorites = (book) => {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: book });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold text-center text-[#F5F5DC] mb-4">Book List</h2>
            {state.books.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {state.books.map((book) => (
                        <Link to={`/books/${book.id}`} key={book.id} className="bg-[#121212] rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 border border-[#A9A9A9]">
                            <h3 className="text-xl font-medium text-[#F5F5DC] mb-2">{book.title}</h3>
                            <p className="text-[#D3D3D3] mb-4">Author: <span className="font-light">{book.author}</span></p>
                            <div className="flex justify-between">
                                <button
                                    onClick={(e) => { e.stopPropagation(); addToWishList(book); }} // لمنع تفعيل الرابط عند الضغط على الزر
                                    className="bg-[#77DD77] text-white font-semibold py-2 px-4 rounded hover:bg-[#4F4F2F] transition"
                                >
                                    Add to Wish List
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); addToFavorites(book); }} // لمنع تفعيل الرابط عند الضغط على الزر
                                    className="bg-[#4F4F2F] text-white font-semibold py-2 px-4 rounded hover:bg-[#77DD77] transition"
                                >
                                    I Like This Book
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-[#D3D3D3] text-lg">No books available</p>
            )}
        </div>
    );
};

export default BookList;
