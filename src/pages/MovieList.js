import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const response = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: response,
        });
      },
    );
  }

  createMovie() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>{ loading ? <Loading /> : this.createMovie() }</div>
    );
  }
}

export default MovieList;
