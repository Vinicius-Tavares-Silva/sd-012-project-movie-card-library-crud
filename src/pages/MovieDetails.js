import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import PropType from 'prop-types';
import movies from '../services/movieData';

class MovieDetails extends Component {
  render() {
    if (Loading === true) return <Loading />;
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    return (
      <div data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div>
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/"> VOLTAR </Link>
          <Link to="/"> DELETAR </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
