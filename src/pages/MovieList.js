import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loadingStatus: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loadingStatus: false }));
  }

  render() {
    const { movies, loadingStatus } = this.state;

    if (loadingStatus) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
