import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log(this.getAndStateMovies());
  }

  getAndStateMovies() {
    this.setState({
      isLoading: true,
    }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({
        isLoading: false,
        movies,
      });
    });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        { isLoading ? <p>Carregando...</p>
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
