import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
    });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading } = this.state;
    if (!loading) { return <Loading />; }
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to="/"> VOLTAR </Link>
        </div>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        </div>
        <div>
          <Link to="/" onClick={ this.deleteMovie }> DELETAR </Link>
        </div>
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
