import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.getingMoviesFetch();
  }

  async getingMoviesFetch() {
    this.setState(
      { loading: true },
      async () => {
        const moviesFetch = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: moviesFetch,
        });
      },
    );
  }

  listFetch = () => {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
        <p><Link to="/movies/new">ADICIONAR CARTÃO</Link></p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <div>{ loading ? <Loading /> : this.listFetch() }</div>
      </div>
    );
  }
}

export default MovieList;
