import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import '../App.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({ movies: result }));
  }
  // função getMovies no arquivo movieAPI.js

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (!movies.length) return <Loading />;
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new" className="buttonClass">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
