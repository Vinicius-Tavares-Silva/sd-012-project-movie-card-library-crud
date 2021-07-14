import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h2>{ movie.title }</h2>
        <p>{ movie.storyline }</p>
        <p><Link to={ `/movies/${movie.id}` }>DETALHES</Link></p>
      </div>
    );
  }
}

export default MovieCard;
