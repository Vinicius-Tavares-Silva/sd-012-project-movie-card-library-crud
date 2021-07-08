import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((idMovie) => this.setState({
      movies: idMovie,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movies;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <Link to={ `/movies/${id}/edit` }> EDITAR </Link>
        <Link to="/"> VOLTAR </Link>
        {/* onClick for tirado do repositório de Thalles Carneiro em https://github.com/tryber/sd-012-project-movie-card-library-crud/pull/1/files */}
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    }),
  }).isRequired,
};

export default MovieDetails;
