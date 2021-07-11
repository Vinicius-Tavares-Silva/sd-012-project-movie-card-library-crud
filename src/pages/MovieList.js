import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieListContainer from '../components/MovieListContainer';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const moviesArray = await movieAPI.getMovies();
    this.loadMovies(moviesArray);
  }

  loadMovies(moviesArray) {
    this.setState(({ movies }) => ({
      movies: [...moviesArray, ...movies],
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;
    return (loading) ? <Loading /> : <MovieListContainer movies={ movies } />;
  }
}

export default MovieList;
