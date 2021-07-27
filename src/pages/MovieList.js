import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

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
    this.getMovieList();
  }

  async getMovieList() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    console.log(movies);
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        <button type="button">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
        {loading ? <Loading />
          : movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />
            // console.log(movies)

          ))}
      </div>
    );
  }
}

export default MovieList;
