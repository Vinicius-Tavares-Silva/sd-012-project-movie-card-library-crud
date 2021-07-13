import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Index />
    </BrowserRouter>
  );
}

export default App;
