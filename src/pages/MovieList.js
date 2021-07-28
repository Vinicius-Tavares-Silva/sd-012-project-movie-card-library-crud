import React, { Component } from 'react';
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
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <p>MovieList</p>
      </div>
    );
  }
}

export default MovieList;
