import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: undefined,
    };

    this.requestDetails = this.requestDetails.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    return this.requestDetails(id);
  }

  async requestDetails(id) {
    const { getMovie } = movieAPI;
    const request = await getMovie(id)
      .then((movie) => (
        this.setState({
          details: movie,
        })
      ));
    return request;
  }

  render() {
    const { details } = this.state;

    if (!details) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = details;
    return (
      <div data-testid="movie-details">
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `Title: ${title}` }</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
