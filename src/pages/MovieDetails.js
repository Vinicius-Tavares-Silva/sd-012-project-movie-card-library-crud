import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { match: { params: { id } } } = this.props;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
    });
  }

  async deleteMovie() {
    const { movie: { id } } = this.state;
    await movieAPI.deleteMovie(id);
  }

  // Esse requisito eu fiz com muito custo vendo e revendo as aulas do course e verifiquei para saber se estava entendendo o que estava pedindo para fazer no commit da Cristina Pineda.
  render() {
    // Change the condition to check the state
    const { movie } = this.state;
    if (!movie) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

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
        <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
