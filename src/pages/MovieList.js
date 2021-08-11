import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesRequest: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({
        movies,
        moviesRequest: true,
      });
    });
  }

  render() {
    const { movies, moviesRequest } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {moviesRequest ? (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) : (
          <Loading />
        )}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
