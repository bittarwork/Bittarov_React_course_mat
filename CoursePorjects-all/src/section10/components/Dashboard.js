import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // إزالة التوكن عند تسجيل الخروج
        navigate('/'); // العودة إلى الصفحة الرئيسية
    };

    return (
        <div className="max-w-md mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
            <button onClick={handleLogout} className="w-full p-2 bg-red-500 text-white rounded">
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
