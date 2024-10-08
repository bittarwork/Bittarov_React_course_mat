import React, { createContext, useReducer } from 'react';

// إنشاء context
export const BookContext = createContext();

// الحالة الابتدائية
const initialState = {
    books: [
        { id: 1, title: '1984', author: 'George Orwell', image: 'https://cdn.kobo.com/book-images/c9472126-7f96-402d-ba57-5ba4c0f4b238/353/569/90/False/nineteen-eighty-four-1984-george.jpg', description: 'A dystopian novel about totalitarianism and surveillance.', isBorrowed: false },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF894,1000_QL80_.jpg', description: 'A novel set in the American South, dealing with issues of race and injustice.', isBorrowed: false },
        { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eVM4A1fVV7VUHB22MbmPgGOTJg0Z4i40rQ&s', description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.', isBorrowed: false },
        { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: 'https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg', description: 'A novel about the American dream and the decadence of the Jazz Age.', isBorrowed: false },
        { id: 5, title: 'Moby Dick', author: 'Herman Melville', image: 'https://m.media-amazon.com/images/I/61iwE2SfFnL._AC_UF894,1000_QL80_.jpg', description: 'A novel about the obsessive quest of Captain Ahab to seek revenge on Moby Dick.', isBorrowed: false },
    ],
    wishList: [],
    favorites: [],
    borrowedBooks: [],
    notification: null
};

// reducer لإدارة العمليات المختلفة
const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            };
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case 'ADD_TO_BORROWED':
            return {
                ...state,
                borrowedBooks: [...state.borrowedBooks, action.payload],
                books: state.books.map(book => book.id === action.payload ? { ...book, isBorrowed: true } : book)
            };
        case 'REMOVE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload)
            };
        case 'UPDATE_NOTIFICATION':
            return {
                ...state,
                notification: action.payload
            };
        default:
            return state;
    }
};

// دالة BookProvider
export const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, initialState);

    // الدوال التحليلية

    // إحصائيات إجمالي الكتب، المفضلات، القوائم وغيرها
    const getTotalBooks = () => state.books.length;
    const getTotalWishList = () => state.wishList.length;
    const getTotalFavorites = () => state.favorites.length;
    const getTotalBorrowedBooks = () => state.borrowedBooks.length;

    // البحث عن الكتب بواسطة اسم المؤلف
    const getBooksByAuthor = (author) => state.books.filter(book => book.author === author);

    // البحث عن الكتب المتاحة (غير المستعارة)
    const getAvailableBooks = () => state.books.filter(book => !book.isBorrowed);

    // إضافة إشعار
    const addNotification = (message) => {
        dispatch({ type: 'UPDATE_NOTIFICATION', payload: message });
        setTimeout(() => {
            dispatch({ type: 'UPDATE_NOTIFICATION', payload: null });
        }, 3000); // الإشعار يختفي بعد 3 ثوانٍ
    };

    // البحث عن الكتب بواسطة كلمة مفتاحية في العنوان أو المؤلف أو الوصف
    const searchBooks = (keyword) => {
        return state.books.filter(book =>
            book.title.toLowerCase().includes(keyword.toLowerCase()) ||
            book.author.toLowerCase().includes(keyword.toLowerCase()) ||
            book.description.toLowerCase().includes(keyword.toLowerCase())
        );
    };

    // وظائف إضافية لإدارة الكتب في لوحة التحكم

    // إضافة كتاب جديد
    const addNewBook = (newBook) => {
        dispatch({ type: 'ADD_BOOK', payload: newBook });
        addNotification('تمت إضافة كتاب جديد.');
    };

    // حذف كتاب
    const removeBook = (bookId) => {
        dispatch({ type: 'REMOVE_BOOK', payload: bookId });
        addNotification('تم حذف الكتاب بنجاح.');
    };

    return (
        <BookContext.Provider value={{
            state,
            dispatch,
            getTotalBooks,
            getTotalWishList,
            getTotalFavorites,
            getTotalBorrowedBooks,
            getBooksByAuthor,
            getAvailableBooks,
            addNotification,
            searchBooks,
            addNewBook,
            removeBook
        }}>
            {children}
        </BookContext.Provider>
    );
};
