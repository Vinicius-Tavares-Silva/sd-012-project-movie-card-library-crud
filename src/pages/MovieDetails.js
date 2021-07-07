import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.changeMovie = this.changeMovie.bind(this);

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
    this.changeMovie(fetchedMovie);
  }

  changeMovie(movie) {
    this.setState({ movie, loading: false });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    const { loading, movie } = this.state;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { deleteMovie } = movieAPI;

    return (
      loading
        ? (
          <Loading>Carregando...</Loading>
        )
        : (
          <div data-testid="movie-details">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
            <h2>{ `Title: ${title}` }</h2>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
            <Link to={ `${id}/edit` }>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={ () => { deleteMovie(id); } }>DELETAR</Link>
          </div>
        )
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
