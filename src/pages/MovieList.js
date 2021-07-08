import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const moviesArray = await movieAPI.getMovies();
      this.setState(({ movies }) => ({
        movies: [...moviesArray, ...movies],
        loading: false,
      }));
    });
  }

  movieList(movies) {
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }

  loadingElement() {
    return <span>Carregando...</span>;
  }

  render() {
    const { movies, loading } = this.state;
    return (loading) ? this.loadingElement() : this.movieList(movies);
  }
}

export default MovieList;
