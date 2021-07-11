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
    this.mountList = this.mountList.bind(this);
  }

  componentDidMount() {
    this.mountList();
  }

  mountList() {
    movieAPI.getMovies()
      .then((movieslist) => this.setState({ movies: movieslist }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
// Requisito 2 cumprido com o auxílio do colega Rodrigo Facury;

export default MovieList;
