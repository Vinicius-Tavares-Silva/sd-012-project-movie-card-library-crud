import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState(() => ({
      movies: [...movies],
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        { movies.length > 0
          ? movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)
          : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
