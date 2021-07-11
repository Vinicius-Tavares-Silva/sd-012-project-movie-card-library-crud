import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
        <p>{rating}</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: undefined,
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default MovieCard;
