import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id);
    this.saveMovie();
  }

  async saveMovie() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    const selectedMovie = await getMovie(id);
    this.setState({
      loading: true,
      movie: selectedMovie,
    });
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const loadedMovie = (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{`Título: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>);

    return (
      <div>
        {loading ? loadedMovie : <Loading />}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
