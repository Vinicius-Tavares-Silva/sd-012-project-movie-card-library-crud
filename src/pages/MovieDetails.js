import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { shape, string, bool } from 'prop-types';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      getInfo: 0,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    getMovie(id).then((mObj) => this.setState({ movie: { ...mObj }, getInfo: 1 }));
  }

  showMovieDatails = () => {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { deleteCard } = this;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Title: ${title}` }</h2>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={ deleteCard }>DELETAR</Link>
      </div>
    );
  }

  deleteCard = (event) => {
    event.preventDefault();
    const { movie } = this.state;
    const { id } = movie;
    deleteMovie(id).then(this.setState({ getInfo: 2 }));
  }

  callLoading = () => <Loading />

  goMovieList = () => <Redirect to="/" />

  render() {
    const { getInfo } = this.state;
    const { callLoading, showMovieDatails, goMovieList } = this;
    const doObject = {
      0: callLoading(),
      1: showMovieDatails(),
      2: goMovieList(),
    };
    return doObject[getInfo];
  }
}

MovieDetails.propTypes = {
  match: shape({
    isExact: bool.isRequired,
    params: shape({
      id: string.isRequired,
    }).isRequired,
    path: string.isRequired,
    url: string.isRequired,
  }).isRequired,
};

export default MovieDetails;
