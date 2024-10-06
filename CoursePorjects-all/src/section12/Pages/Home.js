import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <div className="bg-[#121212] bg-opacity-70 p-10 rounded-lg text-center shadow-2xl transition-transform transform hover:scale-105">
                <h2 className="text-5xl font-extrabold text-[#F5F5DC] mb-4 drop-shadow-md">Welcome to Library Management</h2>
                <p className="text-lg text-[#D3D3D3] mb-6">
                    Explore a wide variety of books, add them to your wish list or favorites, and enjoy an amazing reading experience!
                </p>
                <p className="text-md text-[#A9A9A9] mb-6">
                    Our library offers a rich collection of genres, including fiction, non-fiction, science, history, and much more. Dive into the world of knowledge and creativity!
                </p>
                <div className="space-x-4 mt-6">
                    <Link to="/books">
                        <button className="bg-[#6C757D] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#5A6268] transform hover:scale-105">
                            Explore Books
                        </button>
                    </Link>
                    <Link to="/wishlist">
                        <button className="bg-[#5A6268] text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#6C757D] transform hover:scale-105">
                            My Wish List
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
