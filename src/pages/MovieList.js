import React from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
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

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        { !movies.length ? <Loading /> : console.log('') }
      </div>
    );
  }
}

export default MovieList;
