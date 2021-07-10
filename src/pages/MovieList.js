import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async fetchApi() {
    const { getMovies } = movieAPI;
    this.setState({
      loading: true,
    }, async () => {
      const fetchMovies = await getMovies().then((resolve) => resolve)
      this.setState({
        movies: [...movies,fetchMovies],
        loading: false,
      })
    })
  }
  componentDidMount() {
    this.fetchApi()
  }

  renderMovieList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies[movies.length - 1].map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    )
  }

  render() {
    const { loading } = this.state;
    // Render Loading here if the request is still happening
    const loadingElement = <p>Carregando...</p>
    return (
      <React.Fragment>
        { loading ? loadingElement : this.renderMovieList( ) }
      </React.Fragment>
    );
  }
}

export default MovieList;
