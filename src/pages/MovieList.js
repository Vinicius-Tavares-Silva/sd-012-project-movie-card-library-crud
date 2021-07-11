import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    this.setState(
      { loading: true },
      async () => {
        try {
          const { getMovies } = movieAPI;
          const result = await getMovies();
          this.setState({
            movies: [...result],
            loading: false,
          });
        } catch {
          console.log('Error: movieAPI could not fetch');
        }
      },
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
