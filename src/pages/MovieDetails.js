import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoaded: false
    };
  }

  fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    movieAPI.getMovie(id).then((response) => this.setState({
      movie: response,
      isLoaded: true
    }));
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { isLoaded } = this.state;

    if (!isLoaded) {
      return <Loading />
    }

    return (
      <div data-testid="movie-details">
        <div>
          <h1>{title}</h1>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <button><Link to='/'>VOLTAR</Link></button>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
