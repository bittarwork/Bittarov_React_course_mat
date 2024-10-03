import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import PostDetail from './PostDetail';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-blue-600 shadow-lg p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200">
                            BlogApp
                        </Link>
                    </div>
                </nav>

                <div className="container mx-auto p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/post/:id" element={<PostDetail />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
