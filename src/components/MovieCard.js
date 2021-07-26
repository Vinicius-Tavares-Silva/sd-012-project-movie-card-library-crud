import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <img src={ imagePath } alt="filme" />
        <p>{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        <br />
        <br />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.arrayOf.isRequired,
};
