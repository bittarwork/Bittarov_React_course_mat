// src/components/BookDetails.js

import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookDetails = () => {
    const { id } = useParams(); // الحصول على معرف الكتاب من عنوان URL
    const { state } = useContext(BookContext);

    // البحث عن الكتاب باستخدام المعرف
    const book = state.books.find(book => book.id === parseInt(id));

    // التحقق من وجود الكتاب
    if (!book) {
        return <p className="text-center text-red-500">Book not found!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 mt-16">
            <div className="bg-[#121212] rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold text-[#F5F5DC] mb-4">{book.title}</h2>
                <p className="text-[#D3D3D3] mb-2">
                    Author: <span className="font-light">{book.author}</span>
                </p>
                <img src={book.image} alt={book.title} className="w-full h-auto mb-4 rounded" />
                <p className="text-[#D3D3D3] mb-4">{book.description}</p>
                <p className="text-[#D3D3D3] mb-4">
                    Borrowed: <span className={book.isBorrowed ? 'text-red-500' : 'text-green-500'}>{book.isBorrowed ? 'Yes' : 'No'}</span>
                </p>
                <Link to="/books" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-4">
                    Back to Books
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;
