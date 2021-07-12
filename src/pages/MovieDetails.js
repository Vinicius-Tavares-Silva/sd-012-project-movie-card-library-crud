import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.moviesFetchApi = this.moviesFetchApi.bind(this);
    this.movieDeleter = this.movieDeleter.bind(this);
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.moviesFetchApi();
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  // Solução do erro retirada desse link: https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component

  moviesFetchApi() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((response) => this.setState({
        movie: response,
        loading: false,
      }));
  }

  movieDeleter() {
    const { movie } = this.state;
    const { id } = movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    const {
      movie: { id, title, storyline, imagePath, genre, rating, subtitle },
      loading,
    } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
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
        <button type="button" onClick={ this.movieDeleter }>
          <Link to="/">DELETAR</Link>
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
