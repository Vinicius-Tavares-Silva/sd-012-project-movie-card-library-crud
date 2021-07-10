import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import movieData from '../services/movieData';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.updateMovies(response);
  }

  updateMovies = (response) => {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, response],
      loading: false,
    });
  }

  render() {
    // Render Loading here if the request is still happening
    const { loading } = this.state;
    return (
      <div data-testid="movie-list">
        <h1>MovieList</h1>
        {loading ? <Loading /> : movieData
          .map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
