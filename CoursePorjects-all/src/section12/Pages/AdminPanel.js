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
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Admin Panel</h2>

            {/* Add/Edit Book Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-2xl font-medium mb-4 text-center">{editingBook ? 'Edit Book' : 'Add New Book'}</h3>
                <input
                    type="text"
                    placeholder="Book Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newBook.image}
                    onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <textarea
                    placeholder="Description"
                    value={newBook.description}
                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                    className="border rounded p-3 w-full mb-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                    onClick={editingBook ? handleUpdateBook : handleAddBook}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
                >
                    {editingBook ? 'Update Book' : 'Add Book'}
                </button>
            </div>

            {/* Statistics Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-2xl font-medium mb-4 text-center">Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
                        <h4 className="text-lg font-semibold">Total Books</h4>
                        <p className="text-2xl font-bold">{getTotalBooks()}</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow text-center">
                        <h4 className="text-lg font-semibold">Total Wish List</h4>
                        <p className="text-2xl font-bold">{getTotalWishList()}</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">
                        <h4 className="text-lg font-semibold">Total Favorites</h4>
                        <p className="text-2xl font-bold">{getTotalFavorites()}</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg shadow text-center">
                        <h4 className="text-lg font-semibold">Total Borrowed Books</h4>
                        <p className="text-2xl font-bold">{getTotalBorrowedBooks()}</p>
                    </div>
                </div>
            </div>

            {/* Current Books List */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-medium mb-4 text-center">Current Books</h3>
                {state.books.length > 0 ? (
                    <ul>
                        {state.books.map((book) => (
                            <li key={book.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                                <div className="flex items-center">
                                    <img src={book.image} alt={book.title} className="w-16 h-16 rounded mr-4" />
                                    <div>
                                        <span className="font-semibold">{book.title}</span> by <span className="text-gray-500">{book.author}</span>
                                        <p className="text-sm text-gray-500">{book.description}</p>
                                    </div>
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
                    <p className="text-center text-gray-500">No books available</p>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
