import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      filmes: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ filmes: movie, loading: false }));
  }

  deleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { filmes, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = filmes;

    return (
      <div>
        { loading && <Loading />}
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
          <h3>{`Título: ${title}`}</h3>
          <p>{ `Subtítulo: ${subtitle}` }</p>
          <p>{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <p>{ `Avaliação: ${rating}` }</p>
          <Link to="/">VOLTAR</Link>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
