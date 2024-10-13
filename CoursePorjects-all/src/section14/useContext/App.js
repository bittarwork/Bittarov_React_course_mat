// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from './Home';
import Profile from './Profile';

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
