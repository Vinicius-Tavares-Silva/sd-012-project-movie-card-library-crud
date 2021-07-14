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
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      isLoaded: true,
    }));
  }

  render() {
    const { movies, isLoaded } = this.state;

    if (!isLoaded) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
