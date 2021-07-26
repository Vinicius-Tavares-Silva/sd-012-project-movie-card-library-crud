import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  // testar sem
  constructor() {
    super();
    // flag: true,
    this.state = {
      movie: {},
      loading: true,
    };
    this.choiceDetails = this.choiceDetails.bind(this);
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;

    const returnDetails = await getMovie(id);
    this.choiceDetails(returnDetails);
  }

  choiceDetails(movie) {
    this.setState({ movie, loading: false });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { movie, loading } = this.state;
    const { title, subtitle, storyline, imagePath, genre, rating } = movie;
    const { match: { params: { id } } } = this.props;
    if (loading) return <Loading />;
    const { deleteMovie } = movieAPI;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Tittle: ${title}`}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link onClick={ () => deleteMovie() } to="/">DELETAR</Link>
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
