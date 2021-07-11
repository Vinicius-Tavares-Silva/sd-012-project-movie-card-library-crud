import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Index />
    </Router>
  );
}

export default App;
