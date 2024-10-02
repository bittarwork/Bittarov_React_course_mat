// src/components/BookDetails.js

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
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
        <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="bg-[#121212] rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold text-[#F5F5DC] mb-4">{book.title}</h2>
                <p className="text-[#D3D3D3] mb-2">Author: <span className="font-light">{book.author}</span></p>
                <img src={book.image} alt={book.title} className="w-full h-auto mb-4 rounded" /> {/* إذا كان لديك صورة للكتاب */}
                <p className="text-[#D3D3D3] mb-4">{book.description}</p> {/* وصف الكتاب */}
                <p className="text-[#D3D3D3] mb-4">Borrowed: {book.isBorrowed ? 'Yes' : 'No'}</p> {/* حالة الإعارة */}
            </div>
        </div>
    );
};

export default BookDetails;
