import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
    };
    
  }

  componentDidMount() {
    console.log('montou');
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState((state) => ({ ...state, movies: [...movies] }));
  }

  render() {
    const { movies } = this.state;
    if (!movies.length) return (<Loading />);
    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
