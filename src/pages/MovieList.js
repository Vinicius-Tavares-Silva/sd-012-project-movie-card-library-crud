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
      load: true,
    };
    this.handleGetMovie = this.handleGetMovie.bind(this);
  }

  componentDidMount() {
    this.handleGetMovie();
  }

  async handleGetMovie() {
    const { getMovies } = movieAPI;
    const data = await getMovies();
    this.setState({ movies: [...data], load: false });
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening
    if (load) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        <button type="submit"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
