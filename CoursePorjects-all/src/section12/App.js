import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import WishList from './components/WishList';
import Favorites from './components/Favorites';
import AdminPanel from './components/AdminPanel';
import Layout from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { BookProvider } from './context/BookContext';
import BookDetails from "./components/BookDetails"
function App() {
    return (
        <ThemeProvider>
            <BookProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/books" element={<BookList />} />
                            <Route path="/wishlist" element={<WishList />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/admin" element={<AdminPanel />} />
                            <Route path="/books/:id" element={<BookDetails />} />
                        </Routes>
                    </Layout>
                </Router>
            </BookProvider>
        </ThemeProvider>
    );
}

export default App;
