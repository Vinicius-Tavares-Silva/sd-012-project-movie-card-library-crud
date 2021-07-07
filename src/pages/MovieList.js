import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    // this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    // this.fetchMovies();
    movieAPI.getMovies().then((result) => this.setState({
      movies: result,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
      </div>
    );
  }
}

export default MovieList;
