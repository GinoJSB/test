import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ActiveNotes from './pages/ActiveNotes'; 
import ArchivedNotes from './pages/ArchivedNotes'; 

const App: React.FC = () => {
  return (
    <Router>
      <nav className="main-nav">
        <Link to="/">Home</Link>
        <Link to="/active">Active notes</Link>
        <Link to="/archived">Archived Notes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active" element={<ActiveNotes />} />
        <Route path="/archived" element={<ArchivedNotes />} />
      </Routes>
    </Router>
  );
};

export default App;