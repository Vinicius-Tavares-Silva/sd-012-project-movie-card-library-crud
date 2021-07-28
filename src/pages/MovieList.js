import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchApi = this.fetchApi.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const result = await movieAPI.getMovies();
    this.setState({
      loading: false,
      movies: result,
    });
  }

  render() {
    const { movies } = this.state;
    const getMovies = movies.map((movie) => (<MovieCard
      key={ movie.title }
      movie={ movie }
    />));
    const { loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : getMovies }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
