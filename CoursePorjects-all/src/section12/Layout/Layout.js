import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`flex font-Nunito flex-col min-h-screen ${theme === 'light' ? 'bg-[#F9F9F9]' : 'bg-[#121212]'}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <main className={`flex-grow container mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-12 ${theme === 'light' ? 'text-gray-900' : 'text-[#E0E0E0]'}`}>
                {children}
            </main>
            <Footer theme={theme} />
        </div>
    );
};

export default Layout;
