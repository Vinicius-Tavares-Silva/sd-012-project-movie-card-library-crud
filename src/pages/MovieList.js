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
      flag: true,
    };
    this.callMovieList = this.callMovieList.bind(this);
  }

  componentDidMount() {
    this.callMovieList();
  }

  async callMovieList() {
    const apiMovieList = await movieAPI.getMovies();
    this.setState({
      movies: apiMovieList,
      flag: false,
    });
  }

  render() {
    const { movies, flag } = this.state;
    console.log(flag);
    return (
      <div data-testid="movie-list">
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
        { flag ? <Loading /> : movies
          .map((movie) => <movieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
