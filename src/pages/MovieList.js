import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      response: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: data}))
      .then(() => this.setState({ response: true }))
  }

  render() {
    const { movies, response } = this.state;

    // Render Loading here if the request is still happening
    if( !response ) {
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
