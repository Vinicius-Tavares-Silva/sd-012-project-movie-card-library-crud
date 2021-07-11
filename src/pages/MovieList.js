import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  fetchFunc() {
    movieAPI.getMovies()
      .then((response) => this.setState({
        movies: response,
        interruptor: false,
      }));
  }
  ReturnToHome() {

  }

  render() {
    const { movies, interruptor } = this.state;

    if (interruptor) {
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
