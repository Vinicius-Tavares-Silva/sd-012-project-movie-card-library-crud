import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      interruptor: true,
    };
  }

  componentDidMount() {
    this.fetchFunc();
  }

  fetchFunc() {
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response, interruptor: false }));
  }

  render() {
    const { movies, interruptor } = this.state;
    // Render Loading here if the request is still happening
    if (interruptor) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
