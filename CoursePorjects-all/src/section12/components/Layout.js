
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'bg-[#F5F5DC]' : 'bg-[#121212]'}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main className={`flex-grow container mx-auto py-10 px-10 ${theme === 'light' ? 'text-gray-900' : 'text-[#F5F5DC]'}`}>
                {children}
            </main>
            <Footer theme={theme} />
        </div>
    );
};

export default Layout;
