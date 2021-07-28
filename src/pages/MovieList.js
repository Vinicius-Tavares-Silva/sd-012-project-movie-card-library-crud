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
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((result) => this.setState({ movies: result }))
      .then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        <p>MovieList</p>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
