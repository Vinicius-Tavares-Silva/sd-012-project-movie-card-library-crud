import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
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
    this.getMovies();
  }

  async getMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        {
          loading
            ? <Loading />
            : (
              <div>
                <Link to="/movies/new">ADICIONAR CARTÃO</Link>
                {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
              </div>
            )
        }
      </div>
    );
  }
}

export default MovieList;
