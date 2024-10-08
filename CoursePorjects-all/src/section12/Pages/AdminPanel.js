import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import ConfirmationModal from '../models/ConfirmationModal';

const AdminPanel = () => {
    const { state, dispatch, getTotalBooks, getTotalWishList, getTotalFavorites, getTotalBorrowedBooks, addNotification } = useContext(BookContext);
    const [newBook, setNewBook] = useState({ title: '', author: '', id: Date.now(), image: '', description: '' });
    const [editingBook, setEditingBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookToRemove, setBookToRemove] = useState(null);

    const handleAddBook = () => {
        if (!newBook.title || !newBook.author || !newBook.image || !newBook.description) {
            addNotification('يرجى ملء جميع الحقول.'); // Alert for empty fields
            return;
        }
        dispatch({ type: 'ADD_BOOK', payload: { ...newBook, id: Date.now() } });
        addNotification('تمت إضافة كتاب جديد.');
        resetBookForm();
    };

    const handleEditBook = (book) => {
        setEditingBook(book);
        setNewBook(book);
    };

    const handleUpdateBook = () => {
        if (!newBook.title || !newBook.author || !newBook.image || !newBook.description) {
            addNotification('يرجى ملء جميع الحقول.'); // Alert for empty fields
            return;
        }
        dispatch({ type: 'REMOVE_BOOK', payload: editingBook.id });
        dispatch({ type: 'ADD_BOOK', payload: { ...newBook, id: editingBook.id } });
        addNotification('تم تحديث الكتاب.');
        resetBookForm();
    };

    const resetBookForm = () => {
        setEditingBook(null);
        setNewBook({ title: '', author: '', id: Date.now(), image: '', description: '' });
    };

    const handleRemoveBook = (bookId) => {
        setBookToRemove(bookId);
        setIsModalOpen(true);
    };

    const confirmRemoveBook = () => {
        dispatch({ type: 'REMOVE_BOOK', payload: bookToRemove });
        addNotification('تم حذف الكتاب بنجاح.');
        setIsModalOpen(false);
        setBookToRemove(null);
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto mt-16">
            <h2 className="text-4xl font-semibold mb-6 text-center text-gray-800">لوحة التحكم للمدير</h2>

            {/* Add/Edit Book Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-3xl font-medium mb-4 text-center text-gray-700">{editingBook ? 'تعديل كتاب' : 'إضافة كتاب جديد'}</h3>
                <input
                    type="text"
                    placeholder="عنوان الكتاب"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="المؤلف"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="رابط الصورة"
                    value={newBook.image}
                    onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                    className="border rounded p-3 w-full mb-2 focus:outline-none focus:ring focus:border-blue-500"
                />
                <textarea
                    placeholder="وصف الكتاب"
                    value={newBook.description}
                    onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                    className="border rounded p-3 w-full mb-4 focus:outline-none focus:ring focus:border-blue-500"
                />
                <button
                    onClick={editingBook ? handleUpdateBook : handleAddBook}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-700 transition duration-200"
                >
                    {editingBook ? 'تحديث الكتاب' : 'إضافة كتاب'}
                </button>
            </div>

            {/* Statistics Section */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="text-3xl font-medium mb-4 text-center text-gray-700">الإحصائيات</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: 'إجمالي الكتب', value: getTotalBooks(), bgColor: 'bg-blue-100' },
                        { title: 'إجمالي قائمة الرغبات', value: getTotalWishList(), bgColor: 'bg-green-100' },
                        { title: 'إجمالي المفضلات', value: getTotalFavorites(), bgColor: 'bg-yellow-100' },
                        { title: 'إجمالي الكتب المستعارة', value: getTotalBorrowedBooks(), bgColor: 'bg-red-100' },
                    ].map((stat, index) => (
                        <div key={index} className={`${stat.bgColor} p-4 rounded-lg shadow text-center`}>
                            <h4 className="text-lg font-semibold">{stat.title}</h4>
                            <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Current Books List */}
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-3xl font-medium mb-4 text-center text-gray-700">الكتب الحالية</h3>
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
                                        تعديل
                                    </button>
                                    <button
                                        onClick={() => handleRemoveBook(book.id)}
                                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                                    >
                                        حذف
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">لا توجد كتب متاحة</p>
                )}
            </div>

            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmRemoveBook}
                message="هل أنت متأكد أنك تريد حذف هذا الكتاب؟"
            />
        </div>
    );
};

export default AdminPanel;
