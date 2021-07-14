// requisito feito com a ajuda do Kevin Oliveira
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filmes: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({ movies: response, filmes: true });
    });
  }

  render() {
    const { movies, filmes } = this.state;

    if (!filmes) {
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
