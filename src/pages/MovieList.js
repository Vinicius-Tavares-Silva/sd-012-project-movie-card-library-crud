import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((response) => this.setState({
        movies: response,
        loading: false,
      }));
  }
  // const reqMovies = async  () => {
  //   const { getMovies } = movieAPI;
  //   const movies = await getMovies();
  //   this.setState({
  //     movies: [...movies]
  //     loading: false,
  //   })

  // }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      loading ? (
        <Loading />
      ) : (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>)
    );
  }
}

export default MovieList;
