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
  }

  componentDidMount() {
    this.listMovie();
  }

  listMovie = async () => {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const notLoading = (
      <div>
        {movies
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <h1>Lista de filmes</h1>
        {loading ? <Loading /> : notLoading}
      </div>
    );
  }
}

export default MovieList;
