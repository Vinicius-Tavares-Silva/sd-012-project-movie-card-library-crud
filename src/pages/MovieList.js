import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

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

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (<Loading />);
    }

    return (
      <>
        <div className="add-header">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="container" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </>
    );
  }
}

export default MovieList;
