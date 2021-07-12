import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await getMovies();
    this.setState((prevState) => ({
      movies: [...prevState.movies, ...movies],
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <div data-testid="movie-list">
        {isLoading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
