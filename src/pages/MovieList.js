import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesAPI = this.fetchMoviesAPI.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMoviesAPI();
  }

  async fetchMoviesAPI() {
    this.setState(
      { loading: true },
      async () => {
        const moviesFetch = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesFetch,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link exact to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
