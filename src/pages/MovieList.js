import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((r) => this.setState({ movies: [...r] }));
  }

  handleLoading() {
    this.setState((previous) => ({ loading: !previous.loading }));
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <p>Carregando...</p>;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
