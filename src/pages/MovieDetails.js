import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
    // this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    // this.fetchMovie();
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((result) => this.setState({
      movie: result,
      loading: false,
    }));
  }

  // fetchMovie() {
  //   const { getMovie } = movieAPI;
  //   const { match } = this.props;
  //   const { id } = match.params;

  //   getMovie(id).then((result) => this.setState({
  //     movie: result,
  //     loading: false,
  //   }));
  // }

  render() {
    const { match: { params: { id } } } = this.props;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to="/"> VOLTAR </Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => movieAPI.deleteMovie(id) }> DELETAR </Link>
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
