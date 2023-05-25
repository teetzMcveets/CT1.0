import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './shared/Navigation/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
