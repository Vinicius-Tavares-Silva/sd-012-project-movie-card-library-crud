import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, id, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `${title} cover` } />
        <h2>{ title }</h2>
        <h4>{ subtitle }</h4>
        <p>{ storyline }</p>
        <p><Link to={ `/movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
