import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div className="Movie-Card" data-testid="movie-card">
        <h3>{title}</h3>
        <img className="image" src={ imagePath } alt={ title } />
        <div>{storyline}</div>
        <button className="button-ver-detalhes" type="button">
          <Link to={ `movies/${id}` }> VER DETALHES </Link>
        </button>
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
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
