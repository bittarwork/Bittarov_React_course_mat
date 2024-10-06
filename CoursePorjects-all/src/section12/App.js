import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookList from './Pages/BookList';
import WishList from './Pages/WishList';
import Favorites from './Pages/Favorites';
import AdminPanel from './Pages/AdminPanel';
import Layout from './Layout/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { BookProvider } from './context/BookContext';
import BookDetails from "./components/BookDetails"
function App() {
    return (
        <div className='font-nunito'>
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
        </div>
    );
}

export default App;
