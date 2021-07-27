import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      title: '',
      storyline: '',
      imagePath: '',
      genre: '',
      rating: 0,
      subtitle: '',
    };
  }

  componentDidMount() {
    const { getMovie } = movieAPI;
    const { match } = this.props;
    const { id } = match.params;
    getMovie(id).then((movie) => this.setState(
      {
        loading: false,
        title: movie.title,
        storyline: movie.storyline,
        imagePath: movie.imagePath,
        genre: movie.genre,
        rating: movie.rating,
        subtitle: movie.subtitle,
      },
    ));
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { loading, title, storyline, imagePath, genre, rating, subtitle } = this.state;
    const { match } = this.props;
    const { id } = match.params;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading />
          : (
            <div>
              <img alt="Movie Cover" src={ `../${imagePath}` } />
              <p>{ `Title: ${title}` }</p>
              <p>{ `Subtitle: ${subtitle}` }</p>
              <p>{ `Storyline: ${storyline}` }</p>
              <p>{ `Genre: ${genre}` }</p>
              <p>{ `Rating: ${rating}` }</p>
              <p>
                <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
                |
                <Link to="/">VOLTAR</Link>
                |
                <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
              </p>
            </div>
          )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default MovieDetails;
