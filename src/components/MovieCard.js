import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, genre, rating, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={ imagePath } alt="imagem do filme" />
        <p>{storyline}</p>
        <h3>{ genre }</h3>
        <h3>{ rating }</h3>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
