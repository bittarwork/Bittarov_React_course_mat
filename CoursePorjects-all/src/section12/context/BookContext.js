// src/context/BookContext.js

import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookContext = createContext();

// Initial state with more details for books
const initialState = {
    books: [
        { id: 1, title: '1984', author: 'George Orwell', image: 'https://example.com/images/1984.jpg', description: 'A dystopian novel about totalitarianism and surveillance.', isBorrowed: false },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://example.com/images/to-kill-a-mockingbird.jpg', description: 'A novel set in the American South, dealing with issues of race and injustice.', isBorrowed: false },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', image: 'https://example.com/images/pride-and-prejudice.jpg', description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.', isBorrowed: false },
        { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://example.com/images/the-great-gatsby.jpg', description: 'A novel about the American dream and the decadence of the Jazz Age.', isBorrowed: false },
        { id: 5, title: 'Moby Dick', author: 'Herman Melville', image: 'https://example.com/images/moby-dick.jpg', description: 'A novel about the obsessive quest of Captain Ahab to seek revenge on Moby Dick.', isBorrowed: false },
    ],
    wishList: [],
    favorites: [],
    borrowedBooks: [],
    notification: null,
};

// Book reducer function for handling actions
const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            if (state.books.some(book => book.id === action.payload.id)) {
                return { ...state, notification: 'Book already exists.' }; // Prevent adding duplicate book
            }
            return { ...state, books: [...state.books, action.payload], notification: 'Book added successfully.' };

        case 'UPDATE_BOOK':
            return {
                ...state,
                books: state.books.map(book =>
                    book.id === action.payload.id ? { ...book, ...action.payload.updates } : book
                ),
                notification: 'Book updated successfully.'
            };

        case 'ADD_TO_WISHLIST':
            if (state.wishList.some(book => book.id === action.payload.id)) {
                return { ...state, notification: 'Book already in wishlist.' }; // Prevent adding duplicate to wishlist
            }
            return { ...state, wishList: [...state.wishList, action.payload], notification: 'Added to wishlist.' };

        case 'ADD_TO_FAVORITES':
            if (state.favorites.some(book => book.id === action.payload.id)) {
                return { ...state, notification: 'Book already in favorites.' }; // Prevent adding duplicate to favorites
            }
            return { ...state, favorites: [...state.favorites, action.payload], notification: 'Added to favorites.' };

        case 'BORROW_BOOK':
            if (state.borrowedBooks.some(book => book.id === action.payload.id)) {
                return { ...state, notification: 'Book already borrowed.' }; // Prevent borrowing duplicate
            }
            return { ...state, borrowedBooks: [...state.borrowedBooks, action.payload], notification: 'Book borrowed successfully.' };

        case 'REMOVE_FROM_WISHLIST':
            return { ...state, wishList: state.wishList.filter(book => book.id !== action.payload.id), notification: 'Removed from wishlist.' };

        case 'REMOVE_BOOK':
            const updatedBooks = state.books.filter(book => book.id !== action.payload.id);
            const updatedWishList = state.wishList.filter(book => book.id !== action.payload.id);
            const updatedFavorites = state.favorites.filter(book => book.id !== action.payload.id);
            const updatedBorrowedBooks = state.borrowedBooks.filter(book => book.id !== action.payload.id);

            return {
                ...state,
                books: updatedBooks,
                wishList: updatedWishList,
                favorites: updatedFavorites,
                borrowedBooks: updatedBorrowedBooks,
                notification: 'Book removed successfully.'
            };

        case 'CLEAR_NOTIFICATION':
            return { ...state, notification: null };

        default:
            return state;
    }
};

// Provider component
export const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, initialState);

    // Store state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(state.books));
        localStorage.setItem('wishList', JSON.stringify(state.wishList));
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
        localStorage.setItem('borrowedBooks', JSON.stringify(state.borrowedBooks));
    }, [state]);

    // Additional computed properties
    const getTotalBooks = () => state.books.length;
    const getTotalWishList = () => state.wishList.length;
    const getTotalFavorites = () => state.favorites.length;
    const getTotalBorrowedBooks = () => state.borrowedBooks.length;

    return (
        <BookContext.Provider value={{ state, dispatch, getTotalBooks, getTotalWishList, getTotalFavorites, getTotalBorrowedBooks }}>
            {children}
        </BookContext.Provider>
    );
};

// PropTypes for type-checking
BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { BookContext };
