import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filmes: false,
    };
    this.showDetail = this.showDetail.bind(this);
  }

  async componentDidMount() {
    const { props: { match: { params: { id } } } } = this;
    const detail = await movieAPI.getMovie(id);
    this.showDetail(detail);
  }

  showDetail(detail) {
    this.setState({ movies: detail, filmes: true });
  }

  render() {
    const { movies, filmes } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    if (!filmes) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{`Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
