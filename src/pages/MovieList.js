import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((result) => this.setState({ movies: result }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (!movies.length) return <Loading />;
    return (
      <div className="imagem-fundo" data-testid="movie-list">
        <div className="adicionar-cartao">
          <button className="botao-adicionar" type="button">
            <Link to="/movies/new"> ADICIONAR CARTÃO </Link>
          </button>
        </div>
        <div className="Movie-List">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
