import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((e) => this.setState({ movies: e }));
  }

  render() {
    const { movies } = this.state;
    if (!movies.length) return <Loading />;
    return (
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
