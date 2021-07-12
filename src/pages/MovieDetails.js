import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: '',
      load: true,
    };
    this.handleMovie = this.handleMovie.bind(this);
    this.movieDelete = this.movieDelete.bind(this);
  }

  componentDidMount() {
    this.handleMovie();
  }

  async handleMovie() {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getMovie(id);
    this.setState({ movies: data, load: false });
  }

  async movieDelete() {
    const { match } = this.props;
    const { id } = match.params;
    const deleted = await deleteMovie(id);
    this.setState({ movies: deleted });
  }

  render() {
    const { movies, load } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movies;
    if (load) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details" className="movie-datails">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{title}</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        {/* <link to="/">DELETAR</link> */}
        <button type="button"><Link to="/">VOLTAR</Link></button>
        <button type="button"><Link to={ `/movies/${id}/edit` }>EDITAR</Link></button>
        <button type="button" onClick={ this.movieDelete }>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
