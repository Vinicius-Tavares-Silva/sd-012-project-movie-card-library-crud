import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const fetchResult = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: fetchResult,
    });
  }

  render() {
    const { movies } = this.state;
    const { loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>);
  }
}

export default MovieList;
