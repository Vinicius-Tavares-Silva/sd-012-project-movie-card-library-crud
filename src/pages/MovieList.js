import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.mountMovieList = this.mountMovieList.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.mountMovieList();
  }

  async mountMovieList() {
    const { getMovies } = movieAPI;
    const movies = await getMovies();
    this.setState({
      loading: false,
      movies,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
