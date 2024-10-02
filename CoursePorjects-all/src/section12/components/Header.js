import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, theme }) => {
    return (
        <header className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-transform duration-300 ${theme === 'light' ? 'bg-[#DEF2F1]' : 'bg-[#17252A]'}`}>
            <nav className="container px-10 mx-auto flex justify-between items-center py-4">
                <div className={`text-2xl font-bold transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A]' : 'text-[#FEFFFF]'}`}>
                    Library Management
                </div>
                <div className="space-x-6">
                    <Link to="/" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A] hover:text-[#3AAFA9]' : 'text-[#FEFFFF] hover:text-[#3AAFA9]'}`}>
                        Home
                    </Link>
                    <Link to="/books" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A] hover:text-[#3AAFA9]' : 'text-[#FEFFFF] hover:text-[#3AAFA9]'}`}>
                        Books
                    </Link>
                    <Link to="/wishlist" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A] hover:text-[#3AAFA9]' : 'text-[#FEFFFF] hover:text-[#3AAFA9]'}`}>
                        Wish List
                    </Link>
                    <Link to="/favorites" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A] hover:text-[#3AAFA9]' : 'text-[#FEFFFF] hover:text-[#3AAFA9]'}`}>
                        Favorites
                    </Link>
                    <Link to="/admin" className={`transition-colors duration-300 ${theme === 'light' ? 'text-[#17252A] hover:text-[#3AAFA9]' : 'text-[#FEFFFF] hover:text-[#3AAFA9]'}`}>
                        Admin Panel
                    </Link>
                    <button onClick={toggleTheme} className="ml-6 p-2 bg-[#3AAFA9] text-white rounded-lg transition duration-300 hover:bg-[#2B7A78]">
                        Toggle Theme
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
