import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.alteraMovies = this.alteraMovies.bind(this);
    this.state = {
      movies: {},
      carregando: true,
    };
  }

  componentDidMount() {
    this.alteraMovies();
  }

  async alteraMovies() {
    const { match: { params: { id } } } = this.props;
    const requisicao = await movieAPI.getMovie(id);
    this.setState({
      movies: requisicao,
      carregando: false,
    });
  }

  render() {
    const { movies, carregando } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movies;
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        {carregando ? <Loading /> : (
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
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
