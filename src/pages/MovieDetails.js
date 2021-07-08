import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }
componentDidMount() {
  const { match: { params: { id } } } = this.props;
  movieAPI.getMovie(id).then((response) => this.setState({
    movie: response,
    loading: false,
  }));
}

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { 
      movie: { id, title,storyline, imagePath, genre, rating, subtitle },
      loading,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

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
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }>DELETE</Link>
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
