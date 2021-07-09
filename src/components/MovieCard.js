import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h3 data-testid="movie-card-title" className="movie-card-title">{title}</h3>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
