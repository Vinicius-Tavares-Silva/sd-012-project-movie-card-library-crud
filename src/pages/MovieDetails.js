import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      movie: {},
    };

    this.fetchDetails = this.fetchDetails.bind(this);
    this.eraseMovie = this.eraseMovie.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchDetails(id);
  }

  handleClick() {
    this.eraseMovie();
  }

  async fetchDetails(id) {
    const details = await getMovie(id);
    console.log(details);
    this.setState({
      isLoading: false,
      movie: details,
    });
  }

  async eraseMovie() {
    const { match: { params: { id } } } = this.props;
    await deleteMovie(id);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    const { movie } = this.state;
    const { handleClick } = this;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{title}</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ handleClick }>DELETAR</Link>
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
