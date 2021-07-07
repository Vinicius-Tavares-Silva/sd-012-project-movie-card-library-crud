import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  // Fazendo requisição utilizando a função getMovie da API
  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(parseInt(id, 10));
    this.setState({ movie, loading: false });
  }

  render() {
    console.log(this.state);
    // Change the condition to check the state
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    // if (true) return <Loading />;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        {/* Linha Title acrescentada por mim */}
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <p><Link role="button" to={ `/movies/${id}/edit` }>EDITAR</Link></p>
        <p><Link role="button" to="/">VOLTAR</Link></p>
      </div>
    );
  }
}
export default MovieDetails;

MovieDetails.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  genre: propTypes.string,
  rating: propTypes.number,
}.isRequired;
