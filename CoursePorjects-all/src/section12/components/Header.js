import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-transform duration-300 ${theme === 'light' ? 'bg-[#DEF2F1]' : 'bg-[#17252A]'}`}>
            <nav className="container mx-auto flex justify-between items-center p-4">
                <div className={`text-2xl font-bold transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A]' : 'text-[#FEFFFF]'}`}>
                    Library Management
                </div>

                {/* Menu Button for Mobile */}
                <button onClick={handleMenuToggle} className="md:hidden text-[#17252A] focus:outline-none">
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Links */}
                <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
                    {['/', '/books', '/wishlist', '/favorites', '/admin'].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className={`transition-colors duration-300 py-2 px-4 rounded hover:shadow-lg ${theme === 'light' ? 'text-[#17252A] hover:bg-[#3AAFA9] hover:text-white' : 'text-[#FEFFFF] hover:bg-[#3AAFA9] hover:text-white'}`}
                        >
                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-[#3AAFA9] text-white rounded-lg transition duration-300 hover:bg-[#2B7A78] shadow-md"
                    >
                        Toggle Theme
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md rounded-lg p-4 absolute top-16 left-0 w-full">
                    {['/', '/books', '/wishlist', '/favorites', '/admin'].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className={`block py-2 px-4 rounded hover:bg-[#3AAFA9] hover:text-white ${theme === 'light' ? 'text-[#17252A]' : 'text-[#FEFFFF]'}`}
                            onClick={() => setIsMenuOpen(false)} // Close menu on link click
                        >
                            {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
