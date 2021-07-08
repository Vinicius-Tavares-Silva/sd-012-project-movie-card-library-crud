import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies();
    this.moviesAPI();
  }

  // Render Loading
  async moviesAPI() {
    const { getMovies } = movieAPI;
    const arrayOfMovies = await getMovies();
    this.setState({
      loading: false,
      movies: arrayOfMovies,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const loadedMovies = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>);
    const loadingText = <span>Carregando...</span>;

    return (
      <p>
        {loading ? loadingText : loadedMovies}
      </p>
    );
  }
}
export default MovieList;
