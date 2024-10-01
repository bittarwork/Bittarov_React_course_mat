import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout />
            </Router>
        </ThemeProvider>
    );
}

function Layout() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'bg-gray-900'}`}>
            <header className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-lg py-4`}>
                <nav className="container px-10 mx-auto flex justify-between items-center">
                    <div className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-2xl font-bold`}>Modern Blog</div>
                    <div className="space-x-6">
                        <Link to="/" className={`${theme === 'light' ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Home</Link>
                        <Link to="/blogs" className={`${theme === 'light' ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-400'}`}>Blogs</Link>
                        <button onClick={toggleTheme} className="ml-6 p-2 bg-blue-500 text-white rounded-lg">
                            Toggle Theme
                        </button>
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
    );
}

export default App;
