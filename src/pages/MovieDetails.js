import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };

    this.callDetails = this.callDetails.bind(this);
    this.rightMovie = this.rightMovie.bind(this);
  }

  componentDidMount() {
    this.rightMovie();
  }

  async rightMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await getMovie(id);
    this.setState({
      loading: false,
      movie,
    });
  }

  callDetails() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
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

  render() {
    const { loading } = this.state;
    return (
      <section>
        { loading ? <Loading /> : this.callDetails() }
      </section>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
