import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  };

  async fetchAPI() {
    const moviesPromise = await movieAPI.getMovies();
    this.setState({
      movies: moviesPromise,
   });
  }

  componentDidMount() {
   this.fetchAPI();
  }

  render() {
    const { movies } = this.state;
    console.log(movies);

    if (movies.length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
