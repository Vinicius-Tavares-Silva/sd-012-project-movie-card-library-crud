import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState((state) => ({ ...state, mov: [...movies] }));
  }

  render() {
    const { movies } = this.state;
    if (!movies.length) return (<Loading />);
    return (
      <div data-testid="movie-list">
        {/* {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to={`movies/${movies.id}`}>{movies.name}</Link> */}
      </div>
    );
  }
}

export default MovieList;
