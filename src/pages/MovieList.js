import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      loading ? (
        <Loading />
      ) : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>)
    );
  }
}

export default MovieList;
