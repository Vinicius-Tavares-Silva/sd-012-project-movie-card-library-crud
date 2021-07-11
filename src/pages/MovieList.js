import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.moviesFetchApi = this.moviesFetchApi.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async moviesFetchApi() {
    movieAPI.getMovies()
      .then((response) => this.setState({
        movies: response,
        loading: false,
      }));
  }

  componentDidMount() {
    this.moviesFetchApi();
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
