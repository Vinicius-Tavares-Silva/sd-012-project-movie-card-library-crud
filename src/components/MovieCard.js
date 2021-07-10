import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <p>{ storyline }</p>
        <Link to={ `./movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(Object).isRequired,
};

export default MovieCard;
