import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovieList = this.fetchMovieList.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovieList();
  }

  async fetchMovieList() {
    const list = await movieAPI.getMovies();
    this.setState((prevState) => ({
      movies: [...prevState.movies, ...list],
    }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        { movies.length >= 1
          ? movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
          : <div>Carregando...</div> }
        <button type="button" className="add-button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
