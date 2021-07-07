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
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id).then((res) => {
      this.setState({
        movie: res,
      }, () => this.setState({ loading: false }));
    });
  }

  deleteMovie() {
    const { match: { params: { id } } } = this.props;
    const { deleteMovie } = movieAPI;
    deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) return <Loading />;

    return (
      <div className="movieDetail" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <div className="detailcontent">
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
        </div>
        <div className="detailcontentActions">
          <Link className="button" to="/">VOLTAR</Link>
          <Link className="button" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link
            onClick={ this.deleteMovie }
            className="button"
            to="/"
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieDetails;
