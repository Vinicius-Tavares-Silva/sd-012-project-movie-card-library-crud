import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape(PropTypes.object).isRequired,
}

export default MovieCard;
