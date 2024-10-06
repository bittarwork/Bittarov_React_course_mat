// src/components/WishList.js
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const WishList = () => {
    const { state, dispatch } = useContext(BookContext);

    const borrowBookFromWishList = (book) => {
        dispatch({ type: 'BORROW_BOOK', payload: book });
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: book });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#222] dark:text-[#F5F5DC]">Wish List</h2>
            {state.wishList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {state.wishList.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white dark:bg-[#1F1F1F] rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 dark:border-gray-700 p-5 flex flex-col justify-between"
                        >
                            <h3 className="text-2xl font-semibold text-[#333] dark:text-[#F5F5DC] mb-4">{book.title}</h3>
                            <div className="flex justify-between items-center mt-auto">
                                <button
                                    onClick={() => borrowBookFromWishList(book)}
                                    className="bg-[#6BBF72] text-white font-semibold py-2 rounded hover:bg-[#58A563] transition w-full"
                                >
                                    Borrow
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-[#555] dark:text-[#D3D3D3] text-lg">No books in your wish list</p>
            )}
        </div>
    );
};

export default WishList;
