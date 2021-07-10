import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: undefined,
      loading: true,
    };
    this.handleFetch = this.handleFetch.bind(this);
    this.handleDeletation = this.handleDeletation.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  async handleFetch() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movies: response,
      loading: false,
    });
  }

  handleDeletation() {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movies } = this.state;

    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="button" to={ `/movies/${id}/edit` }>EDITAR </Link>
        <Link className="button" to="/" onClick={ this.handleDeletation }>DELETAR</Link>
        <Link className="button" to="/"> VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.string,
    },
  }).isRequired,
};

export default MovieDetails;
