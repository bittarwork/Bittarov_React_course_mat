import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}>
            <div className="bg-[#121212] bg-opacity-80 p-10 rounded-lg text-center shadow-lg">
                <h2 className="text-5xl font-bold text-[#F5F5DC] mb-4">Welcome to Library Management</h2>
                <p className="text-lg text-[#A9A9A9] mb-6">
                    Explore a wide variety of books, add them to your wish list or favorites, and enjoy an amazing reading experience!
                </p>
                <p className="text-md text-[#D3D3D3] mb-6">
                    Our library offers a rich collection of genres, including fiction, non-fiction, science, history, and much more. Dive into the world of knowledge and creativity!
                </p>
                <div className="space-x-4">
                    <Link to="/books">
                        <button className="bg-[#77DD77] text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-[#4F4F2F]">
                            Explore Books
                        </button>
                    </Link>
                    <Link to="/wishlist">
                        <button className="bg-[#4F4F2F] text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-[#77DD77]">
                            My Wish List
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
