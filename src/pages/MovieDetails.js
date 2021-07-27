import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getMovie } from '../services/movieAPI';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    movieAPI.getMovie(id).then((movie) => {
      this.getDetails(movie);
    });
    this.getDetails = this.getDetails.bind(this);
    this.getMovieDetails();
  }

  async getMovieDetails() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.state = {
      movie,
      loading: false,
      id,
    };
  }

  getDetails(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `/${imagePath}` } />
        <p>{ `${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}`}</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ { pathname: `/movies/${id}/edit`, state: movie } }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};
