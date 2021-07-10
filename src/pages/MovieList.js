import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMoviesAPI = this.fetchMoviesAPI.bind(this);
    this.movieCardList = this.movieCardList.bind(this);

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

  movieCardList() {
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
      <div>{ loading ? <Loading /> : this.movieCardList() }</div>
    );
  }
}

export default MovieList;
