import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { getMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {}, // está com chaves porque só retorna um objeto e não uma lista
      loading: true,
    };
  }

  // componentDidMount() {
  //   this.apiMovie();
  // }

  // async apiMovie() {
  //   const { match } = this.props;
  //   const { params } = match;
  //   const { id } = params;
  //   const reponse = await movieAPI.getMovie(id);
  //   this.setState({
  //     movie: reponse,
  //     loading: false,
  //   });
  // }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    movieAPI.getMovie(id).then((resolve) => this.setState({
      movie: resolve,
      loading: false,
    }));
  }

  render() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { loading } = this.state;
    // const {
    //   movie: { id, title, storyline, imagePath, genre, rating, subtitle },
    //   loading,
    // } = this.state;

    if (loading === true) {
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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetails;
