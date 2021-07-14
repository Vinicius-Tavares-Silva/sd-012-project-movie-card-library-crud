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
      isLoaded: false,
    };

    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id).then((response) => this.setState({
      movie: response,
      isLoaded: true,
    }));
  }

  deleteMovie() {
    const { movie: { id } } = this.state;
    this.setState({ isLoaded: true });
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie:
      { id, title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <div>
          <h1>{ title }</h1>
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button">
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

export default MovieDetails;
