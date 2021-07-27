import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((result) => this
        .setState({ movies: result, loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

// consultei o repositório da Camila Damasio para entender o funcionamento da movieAPI https://github.com/tryber/sd-012-project-movie-card-library-crud/blob/camila-damasio-project-movie-card-library-crud/src/pages/MovieList.js
