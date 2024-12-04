import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import { NewTopic } from '../pages/new';
import MainLayout from '../layout/MainLayout';
import { TopicDetails } from '../pages/topic/[id]';

const AppRoutes: React.FC = () => (
    <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewTopic />} />
                <Route path='/topic/id' element={<TopicDetails />} />
            </Routes>
        </MainLayout>
    </Router>
);

export default AppRoutes;
