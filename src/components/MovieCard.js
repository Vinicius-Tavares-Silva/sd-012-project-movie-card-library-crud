// import { tokTypes } from 'acorn';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id, rating } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ title } />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>
          Rating:
          {rating}
        </p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        Movie Card
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.string,
    rating: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  }).isRequired,
};
export default MovieCard;
