import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <BrowserRouter>
      <Route path="/movie-form" component={ MovieForm } />
    </BrowserRouter>
  );
}

export default App;
