import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movieCard: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchDetails(id);
  }

  async fetchDetails(id) {
    const details = await getMovie(id);
    this.setState({
      movieCard: details,
      isLoading: false,
    });
  }

  render() {
    const { movieCard, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movieCard;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <h4>{title}</h4>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
