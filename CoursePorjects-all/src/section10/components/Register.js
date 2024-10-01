import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/auth/register', {
                email,
                password,
            });

            navigate('/login');  // الانتقال إلى صفحة تسجيل الدخول بعد التسجيل الناجح
        } catch (err) {
            setError('Error creating account');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleRegister}>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
