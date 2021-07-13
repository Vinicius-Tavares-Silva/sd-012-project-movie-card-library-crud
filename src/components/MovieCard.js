import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline, id } = movie;

    return (
      <div data-testid="movie-card">
        Movie Card
        <div>{ title }</div>
        <div>{ subtitle }</div>
        <div>{ storyline }</div>
        <img scr={ imagePath } alt={ title } />
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.number,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
}.isRequired;
