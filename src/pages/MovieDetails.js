import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      movie: {},
      load: true,
    };

    this.getMovieData = this.getMovieData.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovieData();
  }

  async getMovieData() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      id,
      movie,
      load: false,
    });
  }

  deleteMovie() {
    const { id } = this.state;
    movieAPI.deleteMovie(id);
  }

  renderMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <h1>{ title }</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }

  render() {
    const { load, id } = this.state;
    const loadingComponent = <Loading />;
    const movieComponent = this.renderMovie();
    const editPath = `/movies/${id}/edit`;

    return (
      <div>
        { load ? loadingComponent : movieComponent }
        <Link to="/">VOLTAR </Link>
        <Link to={ editPath }>EDITAR </Link>
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};
