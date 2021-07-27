import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.movie,
    };
  }

  render() {
    const { movie } = this.state;
    return (
      <div data-testid="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <h2>{ movie.title }</h2>
        <p>{ movie.storyline }</p>
        <Link to={ `/movies/${movie.id}` }> VER DETALHES </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
