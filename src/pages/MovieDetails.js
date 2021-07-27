import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, loading: true };
    this.stateUpdateGettingAPI = this.stateUpdateGettingAPI.bind(this);
  }

  componentDidMount() {
    this.stateUpdateGettingAPI();
  }

  async stateUpdateGettingAPI() {
    const { match: { params: { id } } } = this.props;
    const api = await movieAPI.getMovie(id);
    this.setState({ movie: api, loading: false });
  }

  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{`Title: ${title}`}</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
