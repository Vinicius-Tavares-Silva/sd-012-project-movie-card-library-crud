import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt={ `${title} ${subtitle}` }
        />
        <div className="movie-card-body">
          <p className="movie-card-title">{ title }</p>
          <p className="movie-card-subtitle">{ subtitle }</p>
          <p className="movie-card-storyline">{ storyline }</p>
          <Link className="page-btn" to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
