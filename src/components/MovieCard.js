import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, imagePath, storyline } = movie;

    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="Cartaz do filme" />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf({}).isRequired,
};

export default MovieCard;
