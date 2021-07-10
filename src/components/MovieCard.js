import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { title, storyline, id } = this.props;
    return (
      <div data-testid="movie-card">
        <h3>{ title }</h3>
        <span>{ storyline }</span>
        <Link to={ `./movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
