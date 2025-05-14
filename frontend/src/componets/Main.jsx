import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModuleList from './components/Course/ModuleList';
import ModuleDetail from './components/Course/ModuleDetail';
import Register from './components/Auth/Register';
import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import ProfileDashboard from './components/Profile/ProfileDashboard';

function Main() {
    return (
        <Router>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<ModuleList />} />
                        <Route path="/module/:moduleId" element={<ModuleDetail />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/profile" element={<ProfileDashboard />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Main;