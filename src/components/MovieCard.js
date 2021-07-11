import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card" data-testid="movie-card">
        <p>Movie Card</p>
        <img src={ movie.imagePath } alt="Movie Cover" />
        <h1>{ movie.title }</h1>
        <p>{ movie.storyline }</p>
        <Link className="link" to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
