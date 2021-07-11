import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={ imagePath } alt={ title } />
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
    imagePath: Proptypes.string.isRequired,
    storyline: Proptypes.string.isRequired,
  }).isRequired,
}.isRequired;

export default MovieCard;
