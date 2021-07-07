import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState((prevState) => ({
      ...prevState,
      movie: response,
      loading: false,
    }));
  }

  render() {
    const { movie, loading } = this.state;
    const { id, storyline, imagePath, genre, rating, subtitle, title } = movie;

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
