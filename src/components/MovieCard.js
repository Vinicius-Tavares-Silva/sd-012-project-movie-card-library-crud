import React from 'react';
import { Link } from 'react-router-dom';
import { MovieDetails } from '../pages';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{movie.title}</h2>
        <p>{movie.storyline}</p>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
