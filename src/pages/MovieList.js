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
  }

  componentDidMount() {
    this.searchMovies();
  }

  async searchMovies() {
    const getRequestMovie = await movieAPI.getMovies();
    this.setState({
      movies: await getRequestMovie,
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
        { movies.length === 0
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
