import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };

    this.getMovieById = this.getMovieById.bind(this);
  }

  componentDidMount() {
    this.getMovieById();
  }

  getMovieById() {
    this.setState(
      { loading: true },
      async () => {
        const { match } = this.props;
        const { id } = match.params;
        const { getMovie } = movieAPI;
        const movie = await getMovie(id);
        this.setState({ movie: { ...movie }, loading: false });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
