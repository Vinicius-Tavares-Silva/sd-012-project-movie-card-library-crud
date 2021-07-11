import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h4 data-testid="movie-card-title" className="movie-card-title">{movie.title}</h4>
        <p className="movie-card-storyline">{movie.storyline}</p>
        <button type="button"><Link to={ `movies/${movie.id}` }>VER DETALHES</Link></button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
