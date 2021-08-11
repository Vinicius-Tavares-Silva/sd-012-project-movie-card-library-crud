import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="movie-card-image" src={ imagePath } alt="Capa do filme" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Link className="btn" to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
