import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    };

    this.getMovieByUrl = this.getMovieByUrl.bind(this);
  }

  componentDidMount() {
    this.getMovieByUrl();
  }

  getMovieByUrl() {
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
    const { loading, movie } = this.state;
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
