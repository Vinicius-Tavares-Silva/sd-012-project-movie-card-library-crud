import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
