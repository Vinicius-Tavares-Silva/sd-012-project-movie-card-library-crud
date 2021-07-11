import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
    this.mountDetails = this.mountDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.mountDetails();
  }

  mountDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id)
      .then((idMovie) => this.setState({ movie: idMovie }));
  }

  deleteMovie() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (Object.entries(movie).length === 0) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

// Requisito 3 cumprido com o auxílio do colega Rodrigo Facury;

export default MovieDetails;
