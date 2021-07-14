import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.fetchAPI();
  }

  async fetchAPI() {
    this.setState({ loading: true },
      async () => {
        const request = await movieAPI.getMovies();
        this.setState({
          movies: request,
          loading: false,
        });
      });
  }

  render() {
    const { movies, loading } = this.state;
    const card = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <button type="button"><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
      </div>);
    return loading ? <Loading /> : card;
  }
}

export default MovieList;
