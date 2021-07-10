import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
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
    // Tem que receber a promisse assim :)
    this.fetchMovies();
  }

  async fetchMovies() {
    const { getMovies } = movieAPI;
    const result = await getMovies();
    this.setState({
      movies: result,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
// Links
// Base para fazer o 2 requisito :) https://pt-br.reactjs.org/docs/faq-ajax.html
// O Incrivel Nuwanda tbm me ajudou a entender o pseudo "fetch" https://github.com/tryber/sd-012-project-movie-card-library-crud/commit/f72c1cf0b2fec5b63bb659187e14fbd45331eef7
