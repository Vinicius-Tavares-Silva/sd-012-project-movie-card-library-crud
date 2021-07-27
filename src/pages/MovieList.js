import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.alteraMovies = this.alteraMovies.bind(this);
    this.state = {
      movies: [],
      carregando: true,
    };
  }

  componentDidMount() {
    this.alteraMovies();
  }

  async alteraMovies() {
    const retornaFilmes = await movieAPI.getMovies();
    this.setState({
      movies: retornaFilmes,
      carregando: false,
    });
  }

  render() {
    const { movies, carregando } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {carregando ? <Loading /> : movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

export default MovieList;
