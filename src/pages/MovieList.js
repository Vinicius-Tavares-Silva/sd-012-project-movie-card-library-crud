import React, { Component } from 'react';
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

    this.fetchMovieAPI = this.fetchMovieAPI.bind(this);
    this.renderMovieCard = this.renderMovieCard.bind(this);
  }

  componentDidMount() {
    this.fetchMovieAPI();
  }

  async fetchMovieAPI() {
    const moviesObject = await movieAPI.getMovies();
    this.setState(({
      movies: moviesObject,
      loading: false,
    }));
  }

  renderMovieCard() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading ? <Loading /> : this.renderMovieCard()}
      </div>
    );
  }
}

export default MovieList;
