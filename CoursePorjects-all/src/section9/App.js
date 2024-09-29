import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <header className="bg-white shadow-lg py-4">
                    <nav className="container px-10 mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold text-gray-900">Modern Blog</div>
                        <div className="space-x-6">
                            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                            <Link to="/blogs" className="text-gray-700 hover:text-blue-600">Blogs</Link>
                        </div>
                    </nav>
                </header>

                <main className="container mx-auto py-10 px-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/blogs/:id" element={<BlogDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
