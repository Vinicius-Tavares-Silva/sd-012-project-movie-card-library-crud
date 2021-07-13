import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
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
      <section>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </section>
    );
  }
}

export default MovieList;
