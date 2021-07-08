import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      getInfo: 0,
    };
  }

  componentDidMount() {
    getMovies().then((movieArr) => this.setState({ movies: [...movieArr], getInfo: 1 }));
  }

  makeMovieCards = () => {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  callLoading = () => <Loading />

  render() {
    const { getInfo } = this.state;
    const { makeMovieCards, callLoading } = this;

    return (getInfo === 0) ? callLoading() : makeMovieCards();
  }
}

export default MovieList;
