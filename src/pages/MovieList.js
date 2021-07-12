import React, { Component } from 'react';
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
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    this.setState(
      { loading: true },
      async () => {
        const movies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {}
        <p>
          {loading
            ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </p>
      </div>
    );
  }
}

export default MovieList;
