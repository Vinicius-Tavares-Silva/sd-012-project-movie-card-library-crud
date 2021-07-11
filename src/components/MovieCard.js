import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <img alt={ movie.imagePath } src={ movie.title } />
        <h2>{ movie.title }</h2>
        <p>{ movie.storyline }</p>
        <Link to={ `./movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default MovieCard;
