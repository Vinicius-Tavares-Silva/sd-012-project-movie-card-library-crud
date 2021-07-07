import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    movieAPI.getMovies()
      .then((allMovies) => this.setState({ movies: allMovies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      movies.length !== 0 ? (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>) : <Loading />
    );
  }
}

export default MovieList;
