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
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    // Esta função foi feita após estudar e compreender o código do colega David Gonzaga.
    const { match } = this.props; // destructuring do match
    const { id } = match.params; // destructuring do id dentro de params
    this.setState({ loading: true }, async () => { // setState atribuindo valor true a loading e abrindo uma arrow function assíncrona
      const requestMovie = await movieAPI.getMovie(id); // requestMovie espera e recebe o resultado de getMovie
      this.setState({ loading: false, movie: requestMovie }); // atribui false a loading e o valor de requestMovie a movie no state.
    });
  }

  renderDetails() {
    const { movie } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h3>{ `Title: ${movie.title}` }</h3>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : this.renderDetails() }
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
