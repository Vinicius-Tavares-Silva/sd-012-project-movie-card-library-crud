import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      interruptor: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    this.fetchFunc(id);
  }

  fetchFunc(id) {
    movieAPI.getMovie(id)
      .then((response) => this.setState({
        movies: response,
        interruptor: false,
      }));
  }

  render() {
    const { movies, interruptor } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;
    if (interruptor) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{`Title: ${title}`}</h1>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link className="link" to="/">VOLTAR</Link>
        <Link className="link" to={ `/movies/${id}/edit` }>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
