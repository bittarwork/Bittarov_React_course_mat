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
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#fff] ">Book List</h2>
            {state.books.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {state.books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 p-5 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-[#333] dark:text-[#F5F5DC] mb-2">{book.title}</h3>
                                <p className="text-md text-gray-700 dark:text-[#D3D3D3] mb-4">Author: <span className="font-light">{book.author}</span></p>
                            </div>
                            <div className="flex flex-col space-y-3 mt-4">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToWishList(book);
                                    }}
                                    className="bg-[#5B9BD5] text-white font-semibold py-2 rounded hover:bg-[#4A92B4] transition"
                                >
                                    Add to Wish List
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToFavorites(book);
                                    }}
                                    className="bg-[#6BBF72] text-white font-semibold py-2 rounded hover:bg-[#58A563] transition"
                                >
                                    I Like This Book
                                </button>
                            </div>
                            <Link to={`/books/${book.id}`}>
                                <button className="bg-[#3B5998] text-white font-semibold py-2 rounded hover:bg-[#2E4A73] transition w-full mt-4">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-[#555] dark:text-[#D3D3D3] text-lg">No books available</p>
            )}
        </div>
    );
};

export default BookList;
