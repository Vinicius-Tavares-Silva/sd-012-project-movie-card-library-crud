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
      loading: true,
    };

    this.GetMoviesFromAPI = this.GetMoviesFromAPI.bind(this);
  }

  componentDidMount() {
    this.GetMoviesFromAPI();
  }

  GetMoviesFromAPI() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState({
        loading: false, movies,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? <Loading /> : movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
