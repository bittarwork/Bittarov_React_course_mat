// src/components/AdminPanel.js

import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const AdminPanel = () => {
    const { state, dispatch, getTotalBooks, getTotalWishList, getTotalFavorites, getTotalBorrowedBooks } = useContext(BookContext);
    const [newBook, setNewBook] = useState({ title: '', author: '', id: Date.now(), image: '', description: '' });
    const [editingBook, setEditingBook] = useState(null);

    const handleAddBook = () => {
        dispatch({ type: 'ADD_BOOK', payload: newBook });
        setNewBook({ title: '', author: '', id: Date.now(), image: '', description: '' });
    };

    const handleEditBook = (book) => {
        setEditingBook(book);
        setNewBook(book);
    };

    const handleUpdateBook = () => {
        dispatch({ type: 'UPDATE_BOOK', payload: { id: editingBook.id, updates: newBook } });
        setEditingBook(null);
        setNewBook({ title: '', author: '', id: Date.now(), image: '', description: '' });
    };

    const handleRemoveBook = (bookId) => {
        dispatch({ type: 'REMOVE_BOOK', payload: { id: bookId } });
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>

            {/* Add/Edit Book Section */}
            <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">{editingBook ? 'Edit Book' : 'Add New Book'}</h3>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="border rounded p-2 w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    className="border rounded p-2 w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newBook.image}
                    onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                    className="border rounded p-2 w-full mb-2"
                />
                <textarea
                    placeholder="Description"
                    value={newBook.description}
                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                    className="border rounded p-2 w-full mb-4"
                />
                <button
                    onClick={editingBook ? handleUpdateBook : handleAddBook}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    {editingBook ? 'Update Book' : 'Add Book'}
                </button>
            </div>

            {/* Statistics Section */}
            <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Statistics</h3>
                <ul className="list-disc list-inside bg-white rounded p-4 shadow">
                    <li>Total Books: {getTotalBooks()}</li>
                    <li>Total Wish List: {getTotalWishList()}</li>
                    <li>Total Favorites: {getTotalFavorites()}</li>
                    <li>Total Borrowed Books: {getTotalBorrowedBooks()}</li>
                </ul>
            </div>

            {/* Current Books List */}
            <div>
                <h3 className="text-xl font-medium mb-2">Current Books</h3>
                {state.books.length > 0 ? (
                    <ul className="bg-white rounded p-4 shadow">
                        {state.books.map((book) => (
                            <li key={book.id} className="flex justify-between items-center py-2 border-b">
                                <div>
                                    <img src={book.image} alt={book.title} className="w-16 h-16 rounded mr-4" />
                                    <span>{book.title} by {book.author}</span>
                                    <p className="text-sm text-gray-500">{book.description}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEditBook(book)}
                                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleRemoveBook(book.id)}
                                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No books available</p>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
