import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
    }, () => this.setState({
      loading: false,
    })));
  }

  render() {
    const { movies, loading } = this.state;
    const wait = (loading ? <Loading />
      : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {wait}
      </div>
    );
  }
}

export default MovieList;
