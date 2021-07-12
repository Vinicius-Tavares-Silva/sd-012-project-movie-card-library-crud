import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card">
        Movie Card
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{storyline}</div>
        <img src={ imagePath } alt={ title } />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
