import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import moviies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { getMovies } = movieAPI;
    this.setState({
      loading: true,
    }, async () => {
      const fetchMovies = await getMovies().then((resolve) => resolve);
      this.setState({
        movies: [...moviies, fetchMovies],
        loading: false,
      });
    });
  }

  renderMovieList() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies[movies.length - 1].map(
          (movie) => <MovieCard key={ movie.title } movie={ movie } />,
        )}
        <Link exact to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    // Render Loading here if the request is still happening
    const loadingElement = <p>Carregando...</p>;
    return (
      loading ? loadingElement : this.renderMovieList()
    );
  }
}

export default MovieList;
