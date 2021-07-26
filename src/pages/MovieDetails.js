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
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  handleRenderMovie(movie) {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }

  async getMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    const deletedMovie = await movieAPI.deleteMovie(id);
    console.log(deletedMovie);
  }

  render() {
    const { movie, loading } = this.state;
    return (
      loading ? <Loading /> : this.handleRenderMovie(movie)
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default MovieDetails;
