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
    };

    this.getApiStateSetting = this.getApiStateSetting.bind(this);
  }

  componentDidMount() {
    this.getApiStateSetting();
  }

  async getApiStateSetting() {
    const api = await movieAPI.getMovies();
    this.setState({ movies: [...api] });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
