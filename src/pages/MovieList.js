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
    const movies = movieAPI.getMovies();
    movies.then((moviesArray) => {
      this.setState({ movies: moviesArray });
      this.setState({ loading: false });
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    // Render Loading here if the request is still happening
    return (
      <section className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
