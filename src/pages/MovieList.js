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
      isFetching: true,
    };
    this.setMovies = this.setMovies.bind(this);
  }

  componentDidMount() {
    this.setMovies();
  }

  async setMovies() {
    const { getMovies } = movieAPI;
    const response = await getMovies();
    this.setState({
      movies: response,
      isFetching: false,
    });
  }

  render() {
    const { movies, isFetching } = this.state;
    if (isFetching) return <Loading />;
    return (
      <div data-testid="movie-list">
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
