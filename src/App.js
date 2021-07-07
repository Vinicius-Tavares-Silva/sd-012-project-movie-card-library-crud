import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <Home />
      </BrowserRouter>
    );
  }
}

export default App;
