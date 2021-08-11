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
      movieRequest: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        movie,
        movieRequest: true,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movieRequest, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {movieRequest ? (
          <div className="movie-card-details">
            <img className="movie-card-image" alt="Movie Cover" src={ `../${imagePath}` } />
            <div className="movie-card-body">
              <p className="movie-card-title">{ title }</p>
              <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
              <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p className="rating">{ `${rating}` }</p>
              <div className="btn-container">
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>
                  DELETAR
                </Link>
                <Link to="/">VOLTAR</Link>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
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
