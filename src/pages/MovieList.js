import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: movies,
    }, () => this.setState({
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;
    console.log(movies);
    const wait = (loading ? (<h1>Carregando...</h1>) : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {wait}
      </div>
    );
  }
}

export default MovieList;
