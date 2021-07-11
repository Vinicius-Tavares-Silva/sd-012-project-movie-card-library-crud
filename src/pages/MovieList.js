import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // async function pegarDadosProcessados(url) {
  //   let v;
  //   try {
  //     v = await baixarDados(url);
  //   } catch(e) {
  //     v = await baixarDadosReservas(url);
  //   }
  //   return processarDadosNoWorker(v);
  // }

  fetchMovies() {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      loading: false,
    })).catch(() => console.log('error'));
  }

  // Para buscar a lista, você deve utilizar a função getMovies importada do módulo movieAPI em MovieList. Essa função retorna uma promise. A requisição deve ser feita no momento em que o MovieList for montado no DOM. Enquanto a requisição estiver em curso, MovieList deve renderizar o componente Loading, como ilustrado na imagem a seguir.
  // TEM UM ERRO HRRVL AQUI!GRRR

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
