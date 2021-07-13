import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{ title }</h1>
        <p>{ storyline }</p>
        <button type="button">
          <Link to={ `movies/${id}` }>
            VER DETALHES
          </Link>
        </button>
      </div>
    );
  }
}

export default MovieCard;
