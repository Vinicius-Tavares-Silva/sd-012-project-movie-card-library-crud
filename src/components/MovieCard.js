import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;
    return (
      <div className="movieCard" data-testid="movie-card">
        <div className="cardHead">
          <img src={ imagePath } alt={ title } />
          <h1>{ title }</h1>
        </div>
        <p className="cardStoryline">{ storyline }</p>
        <Link className="cardDetails" to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
