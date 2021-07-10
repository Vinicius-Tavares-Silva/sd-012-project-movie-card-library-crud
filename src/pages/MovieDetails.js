import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

// Tive que consultar o repositorio da Camila para entender o requisito e o metodo

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.delMovie = this.delMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  handleClick() {
    this.delMovie();
  }

  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState((prevState) => ({
      ...prevState,
      movie: response,
      loading: false,
    }));
  }

  async delMovie() {
    const { match: { params: { id } } } = this.props;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, storyline, imagePath, genre, rating, subtitle, title } = movie;

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button type="button" onClick={ this.handleClick }>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired }).isRequired,
};


export default MovieDetails;
