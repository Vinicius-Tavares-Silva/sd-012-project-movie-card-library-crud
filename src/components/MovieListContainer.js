import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieListContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieListContainer;
