import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieListContainer extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieListContainer;
