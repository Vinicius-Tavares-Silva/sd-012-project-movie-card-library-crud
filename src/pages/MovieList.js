import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    // this.createMovie = this.createMovie.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Meu requisito não estava passando de forma nenhuma e então tentei fazer verificando através do PR da Gabriela Guerra.
  async fetchMovie() {
    const getRequestMovie = await movieAPI.getMovies();
    this.setState({
      movies: await getRequestMovie,
    });
  }

  createMovie() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        { movies.length === 0
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.createMovie()}
      </div>
    );
  }
}

export default MovieList;
