import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesId: {},
      isFetching: true,
    };
    this.fetchMovies = this.fetchMovies.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovies(id);
  }

  async deleteMovie(id) {
    const { deleteMovie } = movieAPI;
    await deleteMovie(id);
  }

  async fetchMovies(moviesId) {
    const { getMovie } = movieAPI;
    const response = await getMovie(moviesId);
    this.setState({
      moviesId: response,
      isFetching: false,
    });
  }

  render() {
    const { moviesId, isFetching } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = moviesId;

    if (isFetching) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
        {/* fiz este requisito com ajuda do repositorio de Bruno Yamamoto */}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
