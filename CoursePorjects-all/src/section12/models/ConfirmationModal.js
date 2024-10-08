// ConfirmationModal.js
import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-lg font-semibold mb-4">{message}</h3>
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-200"
                    >
                        إلغاء
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
                    >
                        تأكيد
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
