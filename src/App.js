import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './shared/Navigation/Navigation/Navigation';
import UserNav from './shared/Navigation/UserNav/UserNav';
import Dashboard from './components/Dashboard/Dashboard';
import Bookings from './components/Bookings/Bookings';
import Candidates from './components/Candidates/Candidates';
import CandidateDetails from './components/Candidates/CandidateAll/CandidateDetails/CandidateDetails';
import Clients from './components/Clients/Clients';
import Finance from './components/Finance/Finance';
import Reports from './components/Reports/Reports';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <Router>
      <Navigation />
      <UserNav />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/candidates/:id' element={<CandidateDetails />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
