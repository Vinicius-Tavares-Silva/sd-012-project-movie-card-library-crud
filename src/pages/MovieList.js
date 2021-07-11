import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const moviesArray = await movieAPI.getMovies();
    this.loadMovies(moviesArray);
  }

  loadMovies(moviesArray) {
    this.setState({ loading: true }, () => {
      this.setState(({ movies }) => ({
        movies: [...moviesArray, ...movies],
        loading: false,
      }));
    });
  }

  movieList(movies) {
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (loading) ? <Loading /> : this.movieList(movies);
  }
}

export default MovieList;
