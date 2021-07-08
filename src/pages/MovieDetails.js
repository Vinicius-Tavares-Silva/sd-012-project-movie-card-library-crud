import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
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
      </div>
    );
  }

  callLoading = () => <Loading />

  render() {
    const { getInfo } = this.state;
    const { callLoading, showMovieDatails } = this;
    return (getInfo === 0) ? callLoading() : showMovieDatails();
  }
}

export default MovieDetails;
