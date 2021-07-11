import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={ imagePath } alt={ title } />
        <p>{ title }</p>
        <p>{ storyline }</p>
        <button type="button"><Link to={ `/movies/${id}` }>VER DETALHES</Link></button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default MovieCard;
