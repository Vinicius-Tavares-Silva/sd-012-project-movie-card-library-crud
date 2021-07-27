import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <Route path="/" component={ MovieList } />
      <div>Movie Card Library CRUD</div>
    </Router>
  );
}

export default App;
