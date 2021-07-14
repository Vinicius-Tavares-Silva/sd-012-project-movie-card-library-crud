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

    this.callMovies = this.callMovies.bind(this);
  }

  componentDidMount() {
    this.callMovies();
  }

  callMovies() {
    const { getMovies } = movieAPI;
    getMovies()
      .then((movieList) => {
        this.setState({
          movies: movieList,
        });
      });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list" />
    );
  }
}

export default MovieList;
