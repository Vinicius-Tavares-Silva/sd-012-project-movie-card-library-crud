import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
