import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchMovieById = this.fetchMovieById.bind(this);
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async fetchMovieById() {
    const { match } = this.props;
    const { id } = match.params;
    this.setState({ loading: true });
    const fechMovieApi = await movieAPI.getMovie(id);
    this.setState({
      movie: fechMovieApi,
      loading: false,
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { match } = this.props;
    const { id } = match.params;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        { loading && <Loading /> }
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
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
