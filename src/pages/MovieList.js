import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const fetchApi = await getMovies();
    this.fetchMovies(fetchApi);
  }

  fetchMovies(newMovie) {
    this.setState({
      movies: newMovie,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
