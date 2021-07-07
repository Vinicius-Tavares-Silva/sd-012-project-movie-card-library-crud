import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
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

  fetchfunc() {
    movieAPI.getMovies()
      .then((response) => this.setState({
        movies: response,
        interruptor: false,
      }));
  }

  render() {
    const { movies, interruptor } = this.State;

    if (interruptor) {
      return <Loading/>;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
