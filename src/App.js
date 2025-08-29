import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/homepage';
import Auth from './components/Auth';
import ExecPost from "./components/ExecPost";
import ExecDashboard from './components/ExecDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/exec-dashboard" element={<ExecDashboard />} />
        <Route path="/exec-post" element={<ExecPost />} />
        {/* Redirect unknown routes to homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

