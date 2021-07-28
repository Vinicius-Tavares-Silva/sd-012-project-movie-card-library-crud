import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
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
    this.fetchAPI(); 
  }

  fetchAPI() {
    this.setState(
      { loading: true },
      async () => {
        const getMovies = await movieAPI.getMovies();
        this.setState({
          movies: getMovies,
          loading: false,
        });
      },
    );
  }

  render() {
    const { loading, movies } = this.state;
    const loadingText = <p>Carregando...</p>;

    // Render Loading here if the request is still happening
    if (loading) {
      return loadingText;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
