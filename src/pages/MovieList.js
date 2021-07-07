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
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((resolve) =>  this.setState({
      movies: resolve,
    })
    );
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length < 1 ) {
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
