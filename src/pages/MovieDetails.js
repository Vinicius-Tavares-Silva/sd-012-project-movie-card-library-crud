import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor({ match }) {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: match.params.id,
      movies: [],
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    this.fetchD();
  }

  async handleClick() {
    const { id } = this.state;
    await movieAPI.deleteMovie(id);
    this.setState({
      shouldRedirect: true,
    });
  }

  async fetchD() {
    const { id } = this.state;
    const fetchMovies = await movieAPI.getMovie(id);
    this.setState({
      movies: { ...fetchMovies },
      loading: false,
    });
  }

  render() {
    const { movies, loading, shouldRedirect } = this.state;
    const { title, id, subtitle, storyline, imagePath, rating, genre } = movies;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <p>{ `title: ${title}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ this.handleClick }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>

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
