// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <nav className="bg-blue-600 shadow-lg p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition">
                            BlogApp
                        </Link>
                        <Link to="/" className="text-white text-lg hover:text-blue-200 transition">
                            Home
                        </Link>
                    </div>
                </nav>

                <main className="flex-grow container mx-auto p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                    </Routes>
                </main>

                <footer className="bg-gray-800 text-white text-center py-4">
                    <p>&copy; 2024 BlogApp. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
