import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const { getMovie } = movieAPI;

    const fetchedMovie = await getMovie(id);
    this.fetchMovies(fetchedMovie);
  }

  fetchMovies(movie) {
    this.setState({ movie, loading: false });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { loading, movie } = this.state;
    const { deleteMovie } = movieAPI;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) return (<Loading />);
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Titulo: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => { deleteMovie(id); } }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
