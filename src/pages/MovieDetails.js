import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: undefined,
    };

    this.requestDetails = this.requestDetails.bind(this);
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    return this.requestDetails(id);
  }

  async requestDetails(id) {
    const { getMovie } = movieAPI;
    const request = await getMovie(id)
      .then((movie) => (
        this.setState({
          details: movie,
        })
      ));
    return request;
  }

  async delete() {
    const { match } = this.props;
    const { id } = match.params;
    const { deleteMovie } = movieAPI;
    await deleteMovie(id);
  }

  render() {
    const { details } = this.state;
    if (!details) { return <Loading />; }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = details;

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
          <Link to="/" onClick={ this.delete }> DELETAR </Link>
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
