import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.moviesFetchApi = this.moviesFetchApi.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.moviesFetchApi();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  // Solução do erro retirada desse link: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

  async moviesFetchApi() {
    movieAPI.getMovies()
      .then((response) => this.setState({
        movies: response,
        loading: false,
      }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
